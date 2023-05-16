const mongoose = require('mongoose')

const storySchema = new mongoose.Schema({
    userId:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'user',
        required:true,
    },
    image:[{
        type:String,
        required:true,

    }],
    createdAt: { type: Date, expires: '2m', default: Date.now }
})

module.exports = mongoose.model("story",storySchema)