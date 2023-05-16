const conversationSchema = require("../models/conversation");

exports.Conversation = async (req, res) => {
  try {
    // console.log(req.body.senderId, req.body.receiverId);
    console.log("enter in con");
    const data = { members: [req.body.senderId, req.body.receiverId] };
    console.log(data);

    conversationSchema
      .findOne({
        members: { $all: [req.body.senderId, req.body.receiverId], $size: 2 },
      })
      .then((exist) => {
        if (exist) {
          console.log("conversation already exist", exist);
          res.status(200).json({
            message: "already exist",
            exist
          });
          return;
        } else {
          console.log("no conversation found");
          const conversation = conversationSchema.create(data);
          res.status(200).json({
            message: "conversation added",
            conversation
           
          });
        }
      })
      .catch((err) => console.error(err));

   
  } catch (error) {
    res.status(200).json({
      success: false,
      message: error,
    });
  }
};

exports.getConversation = async (req, res) => {
  console.log("enter in con riz");
  try {
    const conversation = await conversationSchema.find({
      members: { $in: [req.query.userId] },
    });
    console.log(conversation);
    // const uniqueConversation = await conversationSchema.distinct('members')
    // const conversation =[]
    // const uniqueConversations = await Promise.all(
    //     uniqueConversation.map(async (name)=>{
    //          conversation = await conversationSchema.find({members:{$in :[req.query.userId]}})
    //     })
    // )
    res.status(200).json({
      success: true,
      message: conversation,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: error,
    });
  }
};
