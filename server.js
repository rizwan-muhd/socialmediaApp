const express = require('express')
const  dotenv = require('dotenv')
const cors = require('cors')
const connection = require('./database/connection')
const bodyParser = require("body-parser")

const app = express()
app.use(express.json());

//cors policy
app.use(cors())

//load env vars
dotenv.config({path:"./.env"})

//connect to DB
connection()

//body parser
app.use(bodyParser.urlencoded({extended:false}))

//route files
const user = require("./routes/user")
const addPost = require("./routes/post")
const conversation = require("./routes/conversation")
const messages = require("./routes/message")

//mount routes
app.use("/api/user",user)
app.use("/api/post",addPost)
app.use("/api/conversation",conversation)
app.use("/api/messages", messages)


app.use(bodyParser.json())

app.listen(8080,()=>{
    console.log("server running on port 8080");    
})