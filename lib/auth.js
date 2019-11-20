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

export const getSessionFromClient = () => {
  if (typeof window !== "undefined") {
    const user = window[WINDOW_USER_SCRIPT_VARIABLE] || {};
    console.log("client")
    return { user };

  }
  // await axios.get('api/auth/getSessionUser').then(res => console.log(res));
console.log("client")
  return { user: {} };
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

export const isUserAuthenticated = async (ctx) => {
  const { req, res } = ctx;
  const auth = req ? getSessionFromServer(req) : getSessionFromClient();
  const currentPath = req ? req.url : window.location.pathname;
  console.log(nextCookie(ctx))
  
  if (!auth.user && currentPath !== "/signin") redirectUser(res, "/signin")

  return { auth }
};

// export const authInitialProps = isProtectedRoute => ({
//   req,
//   res,
//   query: { userId }
// }) => {
//   const auth = req ? getSessionFromServer(req) : getSessionFromClient();
//   const currentPath = req ? req.url : window.location.pathname;
//   const user = auth.user;
//   if (isProtectedRoute && user.userName !== 'undefined' && currentPath !== "/signin") {
//     return redirectUser(res, "/signin");
//   }
//   return { auth, userId };
// };

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
  console.log(data._id)

  Cookies.set("user_id", data._id, { expires: 14 })

  return data;
};

export const signoutUser = async () => {
  if (typeof window !== "undefined") {
    window[WINDOW_USER_SCRIPT_VARIABLE] = {};
  }
  Cookies.remove('user_id');
  await axios.get("api/auth/signout");

  Router.push("/signin");
};
