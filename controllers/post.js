const postSchema = require('../models/post')
const upload = require("../middleware/imageUpload")
const jwt = require('jsonwebtoken')

exports.addPost = async(req,res)=>{
    // const authToken = req.headers["authorization"];
    // console.log("route auth", authToken)
    console.log("user-details",req.user)
    try{
        req.body.userId = req.user.id
        console.log("post")
        // const imageUpload = upload()
        const newPost = await new postSchema({...req.body}).save();
        res.status(200).send({
            success:true,
            newPost
        })
    }
    catch(error){
        console.log(error)
    }
}

exports.updatePost = async(req,res)=>{
    try{
        const id = req.query.id
       const post = await postSchema.findById(id)

       res.status(200).json({
        success:true,
        post
       })
    }catch(error){
        res.status(200).json({
            success:false,
            message:error
        })
    }

}

exports.deletePost = async(req,res)=>{
    try{
        const id = req.query.id
        const post = await postSchema.findById(id)
    }catch(error){
        res.status(200).json({
            success:false,
            message:error
        })
    }

}

exports.getMyPosts= async(req,res)=>{
    try{
        const userId = req.user.id
      const posts = await postSchema.find({userId:userId})
      res.status(200).json({
        success:true,
        posts
      })
    }catch(error){
        res.status(200).json({
            success:false,
            message:error
        })
    }
}

exports.getAllPosts = async (req,res)=>{
    try{
        const posts = await postSchema.find({})
        res.status(200).json({
            success:true,
            posts
        })
    }catch(error){
        res.status(200).json({
            success:false,
            message:error

        })
    }
}




