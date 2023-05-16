const express = require('express')
const auth = require('../middleware/auth')
const upload = require("../middleware/imageUpload")
const {addPost,updatePost,deletePost,getMyPosts,getAllPosts} = require("../controllers/post")

const router = express();

//post
router.post('/addPost',auth,addPost)

//put
router.put('/updatePost',auth,updatePost)

//delete
router.delete('/deletePost',deletePost)

//get
router.get('/getMyPosts',getMyPosts)
router.get('/getAllPosts',getAllPosts)


module.exports = router