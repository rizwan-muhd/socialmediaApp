const express = require('express')
const { Conversation,getConversation } = require('../controllers/conversation')
const auth = require('../middleware/auth')

const router = express()

router.post('/',auth,Conversation)
router.get('/',auth, getConversation)

module.exports = router
