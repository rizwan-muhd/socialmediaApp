const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    userId:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'user',
        required:true,
    },
    image:[{
        type:String,

    }],
    location:{
        type:String
    },
    description:{
        type:String,
    },
    likes:{
        type:Map,
        of:Boolean,
    },
    comments:[
       {
         type:String
        }
    ]

},{timestamps:true});

module.exports = mongoose.model("post",postSchema)



