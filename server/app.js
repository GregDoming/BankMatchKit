const express = require("express");
const next = require("next");
const session = require("express-session");
const mongoose = require("mongoose");
const logger = require("morgan");
const passport = require("passport");
const helmet = require("helmet");
const compression = require("compression");
const sslRedirect = require("heroku-ssl-redirect");
const http = require("http");
const https = require("https");
const cors = require("cors")

const authController = require("./controllers/authController");

// const cors = require('cors')


/* Loads all variables from .env file to "process.env" */
require("dotenv").config();
/* Require our models here so we can use the mongoose.model() singleton to reference our models across our app */
require("./passport");
require("./models/Post");
require("./models/User");

const dev = process.env.NODE_ENV !== "production";
const port = process.env.PORT || 3000;
const ROOT_URL = dev ? `http://localhost:${port}` : process.env.PRODUCTION_URL;
const app = next({ dev });
const handle = app.getRequestHandler();

const mongooseOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
};
const routes = require("./routes");

mongoose
.connect(
  process.env.MONGO_URI,
  mongooseOptions,
  )
  .then(() => console.log("DB connected"));
  
  mongoose.connection.on("error", err => {
    console.log(`DB connection error: ${err.message}`);
  });

// if (process.env.NODE_ENV === 'production') {
// 	app.use(express.static('../next/static'));
// }
  
  app.prepare().then(() => {
    const server = express();

    
    if (!dev) {
      /* Helmet helps secure our app by setting various HTTP headers */
      server.use(helmet());
      /* Compression gives us gzip compression */
      server.use(compression());
    }
    
    /* Body Parser built-in to Express as of version 4.16 */
    server.use(express.json());
    /* Express Validator will validate form data sent to the backend */
    // server.use(expressValidator());
    
    /* give all Next.js's requests to Next.js server */
    server.get("/_next/*", (req, res) => {
      handle(req, res);
    });
    
    server.get("/static/*", (req, res) => {
      handle(req, res);
    });
    
    const MongoStore = require("connect-mongo")(session)
    const sessionConfig = {
      name: "next-connect.sid",
      // secret used for using signed cookies w/ the session
      secret: process.env.SESSION_SECRET,
      store: new MongoStore({
        mongooseConnection: mongoose.connection,
        ttl: 14 * 24 * 60 * 60 // save session for 14 days
      }),
      // forces the session to be saved back to the store
      resave: false,
      // don't save unmodified sessions
      saveUninitialized: false,
    cookie: {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 14 // expires in 14 days
    }
  };
  
  if (!dev) {
    sessionConfig.cookie.secure = true; // serve secure cookies in production environment
    server.set("trust proxy", 1); // trust first proxy
  }
  
  /* Apply our session configuration to express-session */
  server.use(session(sessionConfig));
  
  /* Add passport middleware to set passport up */
  server.use(passport.initialize());
  server.use(passport.session());
  
  server.use(sslRedirect());
  
  
  server.use((req, res, next) => {
    /* custom middleware to put our user data (from passport) on the req.user so we can access it as such anywhere in our app */
    res.locals.user = req.user || null;
    next();
  });
  
  /* morgan for request logging from client
  - we use skip to ignore static files from _next folder */
  server.use(
    logger("dev", {
      skip: req => req.url.includes("_next")
    })
    );
    
    /* apply routes from the "routes" folder */
    server.use("/", routes);
    
    /* Error handling from async / await functions */
    server.use((err, req, res, next) => {
      const { status = 500, message } = err;
      res.status(status).json(message);
    });
    
    // server.get("/profile", (req, res) => {
      //   app.render(req, res, "/profile", query)
      // });
      // server.get("/profile", authController.checkAuth)
      
      // server.get("/authpagination", authController.checkAuth)
      
      
      /* create custom routes with route params. If the server gets a request with a query on it put the
      results into an objext with the key of "userId" and the object will get query parametsers that 
      was passed to it so it assigns route params to end of url. */
      server.get("/profile/:userId", (req, res) => {
        const routeParams = Object.assign({}, req.params, req.query);
        return app.render(req, res, "/profile", routeParams);
      });
      
      // server.use(cors());
      // server.get("/lendersearch/searchall", (req, res) => {
      //   // const routeParams = Object.assign({}, req.params, req.query);
      //   return app.render(req, res, "/lendersearch");
      // });
      
      /* default route
     - allows Next to handle all other routes
     - includes the numerous `/_next/...` routes which must    be exposedfor the next app to work correctly
     - includes 404'ing on unknown routes */
  server.get("*", (req, res) => {
    handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`Server listening on ${ROOT_URL}`);
  });
});
