const mongoose = require("mongoose");
const User = mongoose.model("User");
const multer = require("multer");
const jimp = require("jimp");
const { createReadStream, createWriteStream } = require("fs");
const { parse } = require("json2csv");
const helper = require("../../lib/helper.js");
const fs = require("fs");

exports.getUsers = async (req, res) => {
  const users = await User.find().select(`_id name email createdAt updatedAt`);
  res.json(users);
};

exports.adminsGetUserById = async (req, res) => {
  try {
    //Check to see if it is the correct time to load the page
    if (mongoose.Types.ObjectId.isValid(req.params.id)) {
      const editUser = await User.findById(req.params.id );
      res.status(200).json(editUser)
    } else {
      console.log("Invalid Id")
    }
  } catch (err) {
    console.log(err);
  }
};

exports.downloadCSV = async (req, res) => {
  try {
    const users = await User.find({});
    const formattedUsers = helper.formatAllUsers(users);
    const csv = await parse(formattedUsers);

    res.setHeader("Content-disposition", "attachment; filename=lender.csv");
    res.set("Content-type", "text/csv");
    res.status(200).send(csv);
  } catch (err) {
    console.log(err);
  }
};

exports.getLenderQuery = async (req, res) => {
  try {
    const userArr = [];
    const user = await User.find({ $and: req.body });

    user.forEach(foundUser => {
      userArr.push([foundUser["userProfile"], { email: foundUser["email"], id: foundUser["_id"] }]);
    });

    res.status(200).send(userArr);
  } catch (err) {
    console.log(err);
  }
};

exports.getAllLenderQuery = async (req, res) => {
  try {
    const userArr = [];
    const user = await User.find()

    user.forEach(foundUser => {
      userArr.push([foundUser["userProfile"], { email: foundUser["email"], id: foundUser["_id"] }]);
    });

    res.status(200).send(userArr);
  } catch (err) {
    console.log(err);
  }
};

exports.getAuthUser = (req, res) => {
  if (!req.isAuthUser) {
    res.status(403).json({
      message: "You are unauthenticated. Please sign in or sign up"
    });
    return res.redirect("/signin");
  }
  res.json(req.user);
};

exports.getUserId = async (req, res, next, id) => {
  res.json(req.user);
};

exports.getUserById = async (req, res, next, id) => {
  const user = await User.findOne({ _id: id });
  req.profile = user;

  const profileId = mongoose.Types.ObjectId(req.profile._id);

  if (req.user && profileId.equals(req.user._id)) {
    req.isAuthUser = true;
    return next();
  }
  next();
};


exports.getUserByIdandUpdate = async (req, res, next, id) => {
  const user = await User.findOne({ _id: id });
  req.profile = user;

  const profileId = mongoose.Types.ObjectId(req.profile._id);

  if (req.user && profileId.equals(req.user._id)) {
    req.isAuthUser = true;
    return next();
  }
  next();
};

exports.getUserProfile = (req, res) => {
  if (!req.profile) {
    return res.status(404).json({
      message: "No user found"
    });
  }
  res.json(req.profile);
};

exports.getUserFeed = async (req, res) => {
  const { following, _id } = req.profile;

  following.push(_id);
  const users = await User.find({ _id: { $nin: following } }).select("_id name avatar");
  res.json(users);
};

const avatarUploadOptions = {
  storage: multer.memoryStorage(),
  limits: {
    //storing files up t 1mb
    fileSize: 1024 * 1024 * 1
  },
  fileFilter: (req, file, next) => {
    if (file.mimetype.startsWith("image/")) {
      next(null, true);
    } else {
      next(null, false);
    }
  }
};

exports.uploadAvatar = multer(avatarUploadOptions).single("avatar");

exports.resizeAvatar = async (req, res, next) => {
  if (!req.file) {
    return next();
  }
  const extension = req.file.mimetype.split("/")[1];
  req.body.avatar = `/static/uploads/avatars/${req.user.name}-${Date.now()}
  .${extension}`;
  const image = await jimp.read(req.file.buffer);
  await image.resize(250, jimp.AUTO);
  await image.write(`./${req.body.avatar}`);
  next();
};

exports.updateUser = async (req, res) => {
  try {
    req.body.updatedAt = new Date().toISOString();
    const updatedUser = await User.findOneAndUpdate(
      { _id: req.user._id },
      { $set: req.body.formInfo },
      { new: true, runValidators: true }
    );
    res.json(updatedUser);
  } catch (err) {
    console.log(err)
  }
};

exports.updateAdminUser = async (req, res) => {
  try {
    req.body.updatedAt = new Date().toISOString();
    const updatedUser = await User.findOneAndUpdate(
      { _id: req.body.formInfo._id },
      { $set: req.body.formInfo },
      { new: true, runValidators: true }
    );
    res.json(updatedUser);
  } catch (err) {
    console.log(err)
  }
};

exports.deleteUser = async (req, res) => {
  const { userId } = req.params;
  if (!req.isAuthUser) {
    return res.status(400).json({
      message: "You are not authorized to perform this action"
    });
  }
  const deletedUser = await User.findOneAndDelete({ _id: userId });
  res.json(deletedUser);
};

exports.addFollowing = async (req, res, next) => {
  const { followId } = req.body;

  await User.findOneAndUpdate({ _id: req.user._id }, { $push: { following: followId } });
  next();
};

exports.addFollower = async (req, res) => {
  const { followId } = req.body;

  const user = await User.findOneAndUpdate(
    { _id: followId },
    { $push: { followers: req.user._id } },
    { new: true }
  );
  res.json(user);
};

exports.deleteFollowing = async (req, res, next) => {
  const { followId } = req.body;

  await User.findOneAndUpdate({ _id: req.user._id }, { $pull: { following: followId } });
  next();
};

exports.deleteFollower = async (req, res) => {
  const { followId } = req.body;

  const user = await User.findOneAndUpdate(
    { _id: followId },
    { $pull: { followers: req.user._id } },
    { new: true }
  );
  res.json(user);
};
