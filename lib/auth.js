import Router from "next/router";
import axios from "axios";
import nextCookie from "next-cookies";
import Cookies from "js-cookie";

const WINDOW_USER_SCRIPT_VARIABLE = "__USER__";

export const getUserScript = user => {
  return `${WINDOW_USER_SCRIPT_VARIABLE} = ${JSON.stringify(user)};`;
};

export const getSessionFromServer = req => {
  if (req.user) {
    return { user: req.user };
  }
  return {};
};

export const checkSession = ctx => {
  const { token } = nextCookie(ctx);

  /*
   * If `ctx.req` is available it means we are on the server.
   * Additionally if there's no token it means the user is not logged in.
   */
  if (ctx.req && !token) {
    ctx.res.writeHead(302, { Location: "/login" });
    ctx.res.end();
  }

  // We already checked for server. This should only happen on client.
  if (!token) {
    Router.push("/login");
  }

  return token;
};

export const redirectUser = (res, path) => {
  if (res) {
    res.redirect(302, path);
    res.finished = true;
    return {};
  }
  Router.replace(path);
  return {};
};

export const checkString = data => {
  if (typeof data === "string") return data;

  return JSON.stringify(data);
};
const closure = obj => {
  const what = {};
  const convertState = obj => {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] === "object") convertState(obj[key]);
        if (typeof obj[key] === "string" || typeof obj[key] === "number") what[key] = obj[key];
      }
    }
  };
  convertState(obj);
  return what;
};
export const isUserAuthenticated = async ctx => {
  const { req, res } = ctx;
  const currentPath = req ? req.url : window.location.pathname
  const { bankMatchCookie } = nextCookie(ctx);

  if (req) {
    const auth = await getSessionFromServer(req);
    console.log(auth)
    const response = await axios.get(`/api/users/${bankMatchCookie}`);
    const flatState = closure(response.data);

    if (!auth.user && currentPath !== "/signin") redirectUser(res, "/signin");
    return { auth, flatState };
  }

  const response = await axios.get(`/api/users/${bankMatchCookie}`);
  const auth = { user: response.data };
  const flatState = closure(response.data);
  console.log(auth)

  return { auth, flatState };
};

export const signupUser = async user => {
  const { data } = await axios.post("api/auth/signup", user, {
    headers: { "Content-Type": "application/json" }
  });
  return data;
};

export const landingPageAuth = async ctx => {
  if (nextCookie(ctx).hasOwnProperty("bankMatchCookie")) {
    const { bankMatchCookie } = nextCookie(ctx);
    const auth = {
      user: {
        _id: bankMatchCookie
      }
    };
    return { auth };
  }
  return {};
};

export const signinUser = async user => {
  const { data } = await axios.post("/api/auth/signin", user);

  if (typeof window !== "undefined") {
    window[WINDOW_USER_SCRIPT_VARIABLE] = data || {};
  }

  Cookies.set("bankMatchCookie", data._id, { expires: 14 });

  return data;
};

export const signoutUser = async () => {
  if (typeof window !== "undefined") {
    window[WINDOW_USER_SCRIPT_VARIABLE] = {};
  }
  Cookies.remove("bankMatchCookie");
  await axios.get("api/auth/signout");

  Router.push("/signin");
};
