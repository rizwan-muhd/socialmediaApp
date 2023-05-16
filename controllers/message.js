const messageSchema = require('../models/message')

exports.addChat = async(req,res)=>{
    try{
        console.log("enter in message")
        // req.body.sender = req.user.id
        console.log(req.body)
      const newMessage = new messageSchema({...req.body})
      newMessage.save()
      res.status(200).json({
        success:true,
        message:newMessage
      })
    }
    catch(error){
        res.status(200).json({
            success:false,
            message:error
        })
    }
}

exports.getChat = async(req,res)=>{
    try{
        console.log("enter in con")
       const messages = await messageSchema.find({
        conversationId:req.query.conversationId
       })
       console.log(messages)
       res.status(200).json({
        success:true,
        message:messages
       })
    }
    catch(error){
        res.status(200).json({
            success:false,
            message:error
        })
    }
}