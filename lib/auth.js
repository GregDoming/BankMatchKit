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

// export const getSessionFromClient = () => {
//   if (typeof window !== "undefined") {
//     const user = window[WINDOW_USER_SCRIPT_VARIABLE] || {};
//     console.log("client")
//     return { user };

//   }
//   // await axios.get('api/auth/getSessionUser').then(res => console.log(res));
// console.log("client2")
//   return { user: {} };
// };

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

export const isUserAuthenticated = async (ctx) => {
  const { req, res } = ctx;
  const currentPath = req ? req.url : window.location.pathname;
  if (req) {
    const auth = getSessionFromServer(req)
    if (!auth.user && currentPath !== "/signin") redirectUser(res, "/signin")
    return { auth }
  }

  const response = await axios.get("/api/users/5dafbd65ff0e506becb525f3")
  const auth = { user: response.data }

  return { auth }
  

};

export const signupUser = async user => {
  const { data } = await axios.post("api/auth/signup", user, {
    headers: { "Content-Type": "application/json" }
  });
  return data;
};

export const signinUser = async user => {
  const { data } = await axios.post("/api/auth/signin", user);

  if (typeof window !== "undefined") {
    window[WINDOW_USER_SCRIPT_VARIABLE] = data || {};
  }

  Cookies.set("bankMatch", data._id, { expires: 14 })

  return data;
};

export const signoutUser = async () => {
  if (typeof window !== "undefined") {
    window[WINDOW_USER_SCRIPT_VARIABLE] = {};
  }
  Cookies.remove('bankMatch');
  await axios.get("api/auth/signout");

  Router.push("/signin");
};
