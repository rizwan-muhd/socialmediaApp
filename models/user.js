const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
   
    firstName:{
        type:String,
    
    },
    lastName:{
     type:String,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
      type:String,
      required:true  
    },
    profilePicture:{
        type:String,
    },
    bio:{
        type:String,
    },
    location:{
        type:String
    },
    website:{
        type:String,
    },
    occupation:{
        type:String,
    },
    birthdate:{
        type:String,
    },
    gender:{
        type:String
    },
    archive:{
        type:Array,
        default:[],
    },
    followers:
       {
         type: Array,
         default: []
        },
    following:
        {
          type: Array,
          default: []
         },
    })

module.exports =mongoose.model("user",userSchema)