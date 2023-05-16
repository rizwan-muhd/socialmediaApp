const aws = require('aws-sdk');
const multer = require('multer')
const multerS3 = require('multer-s3');
const path= require('path');


aws.config.update({
    accessKeyId:'',
    secretAccessKey:"",
})

const s3 = new aws.S3();

console.log("inside s3")
const storage = multerS3({
    
    s3:s3,
    bucket:'',
    acl:'public-read',
    contentType:multerS3.AUTO_CONTENT_TYPE,
    key:function(req,res,cb){
        const folderName = ''
        const fileName = Date.now() + "_" + file.fieldname + "_" + file.originalname;
        const fullPath = folderName + '/' + fileName;
        cb(null,fullPath);

    }
});

const upload = multer({
    storage:storage
})

module.exports = upload