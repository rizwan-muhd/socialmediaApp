const express = require('express')
const auth = require('../middleware/auth')
const {addChat ,deleChat,getChat} = require('../controllers/message')
const router = express()

// post 
router.post('/chat',auth,addChat)

// delete
// router.delete('/chat',auth,deleChat)

//get
router.get('/chat',auth,getChat)

module.exports = router