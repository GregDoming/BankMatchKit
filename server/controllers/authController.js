const mongoose = require("mongoose");
const passport = require("passport");
const bcrypt = require("bcrypt");

const validation = require("../models/Validation.js");
const User = require("../models/User");

mongoose.model("User");

exports.validateSignup = async (req, res, next) => {
  const { error } = validation.signupValidation(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  //Check if email already exists in the database
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("Email already exists");

  next();
};

exports.signup = async (req, res) => {
  const { username, email, password } = req.body;

  //Encrypts password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const formatUsername = username.replace(/\s/g, '');
  const formatEmail = email.replace(/\s/g, '');

  const user = await new User({
    username: formatUsername,
    email: formatEmail,
    password: hashedPassword
  });

  User.register(user, password, (err, user) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(user.username);
  });
};

exports.signin = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return res.status(500).json(err.message);
    }
    if (!user) {
      return res.status(400).json(info.message);
    }

    req.logIn(user, err => {
      if (err) {
        return res.status(500).json(err.message);
      }

      res.json(user);
    });
  })(req, res, next);
};

exports.signout = (req, res) => {
  res.clearCookie("next-cookie.sid");
  req.logout();
  res.json({ message: "You are now signed out" });
};

exports.getSessionUser = ( req, res, next) => {
  if (req.isAuthenticated()) {
  }
}

exports.checkAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
};

exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    // roles ['admin', 'user']
    

    if(!roles.includes(req.user.roles)) {
      return res.status(403)
    }
    next();
  }
}

