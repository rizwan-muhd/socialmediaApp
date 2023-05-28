const postSchema = require("../models/post");
const { upload } = require("../utils/imageUpload");
const jwt = require("jsonwebtoken");

exports.addPost = async (req, res) => {
  // const authToken = req.headers["authorization"];
  // console.log("route auth", authToken)
//   console.log("user-details", req.user);
  try {
    const body = req.body;
    // console.log("file",req.file)
    
    const uploadImage = upload.single("image");

    uploadImage(req, res, async (err) => {
      if (err) {
        console.log("entr",err)
        return res.status(400).json({ success: false, message: err.message });
      }

      body.userId = req.user.id;
      console.log("post");
      // const imageUpload = upload()
      console.log(req.file);
        body.image = req.file.location;
        const newPost = await new postSchema({ ...body }).save();
      res.status(200).send({
        success: true,
      });
    });
  } catch (error) {
    console.log(error);
  }
};

exports.updatePost = async (req, res) => {
  try {
    const id = req.query.id;
    const post = await postSchema.findById(id);

    res.status(200).json({
      success: true,
      post,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: error,
    });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const id = req.query.id;
    const post = await postSchema.findById(id);
  } catch (error) {
    res.status(200).json({
      success: false,
      message: error,
    });
  }
};

exports.getMyPosts = async (req, res) => {
  try {
    // const userId = req.user.id;
    const userId = req.query.id
    const posts = await postSchema.find({ userId: userId }).populate({path:"userId"});
    res.status(200).json({
      success: true,
      posts,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: error,
    });
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await postSchema.find({});
    res.status(200).json({
      success: true,
      posts,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: error,
    });
  }
};
