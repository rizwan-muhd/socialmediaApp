

const { S3Client } = require("@aws-sdk/client-s3");
const { S3 } = require("@aws-sdk/client-s3");

const multer = require("multer");
const multerS3 = require("multer-s3");
const path = require("path");

// Configure the S3 client
const s3Client = new S3Client({
  region: process.env.AWS_S3_REGION,
  credentials: {
    accessKeyId: process.env.AWS_S3_ACCESS_KEY,
    secretAccessKey: process.env.AWS_S3_SECRET_KEY,
  },
});

// Create the S3 instance
const s3 = new S3({ client: s3Client });

// Configure the multer storage using multer-s3
const storage1 = multerS3({
  s3: s3,
  bucket: "mern-sociopedia",
  acl: "public-read",
  contentType: multerS3.AUTO_CONTENT_TYPE,
  metadata: function (req, file, cb) {
    cb(null, { fieldname: file.fieldname });
  },
  key: function (req, file, cb) {
    console.log("gere");
    const fileName =
      Date.now() + "_" + file.fieldname + "_" + file.originalname;
    console.log(fileName);
    cb(null, fileName);
    console.log("eeee");
  },
});

const upload = multer({
  storage: storage1,
});

module.exports = { upload };
