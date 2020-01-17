const multer = require("multer");
// const jimp = require("jimp");
const mongoose = require("mongoose");
const Post = mongoose.model("Post");

const imageUploadOptions = {
  storage: multer.memoryStorage(),
  limits: {
    //storing files up t 1mb
    fileSize: 1024 * 1024 * 1
  },
  fileFilter: (_req, file, next) => {
    if (file.mimetype.startsWith("image/")) {
      next(null, true);
    } else {
      next(null, false);
    }
  }
};

exports.uploadImage = multer(imageUploadOptions).single("avatar");

// exports.resizeImage = async (req, _res, next) => {
//   if (!req.file) {
//     return next();
//   }
//   const extension = req.file.mimetype.split("/")[1];
//   req.body.image = `/static/uploads/avatars/${req.user.username}-${Date.now()}
//   .${extension}`;
//   const image = await jimp.read(req.file.buffer);
//   await image.resize(750, jimp.AUTO);
//   await image.write(`./${req.body.image}`);
//   next();
// };

exports.addPost = async (req, res) => {
  req.body.postedBy = req.user._id;
  const post = await new Post(req.body).save();
  await Post.populate(post, {
    path: "postedBy",
    select: "_id name avatar"
  });
  res.json(post);
};

exports.deletePost = () => {};

exports.getPostById = () => {};

exports.getPostsByUser = () => {};

exports.getPostFeed = () => {};

exports.toggleLike = () => {};

exports.toggleComment = () => {};
