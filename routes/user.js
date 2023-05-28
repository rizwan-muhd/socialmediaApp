const express = require('express')
const { generate } = require('otp-generator')
const router = express()
const {addUser,login,updateUser,deleteUser,getAllUsers, follow,generateOtp, getUser,getMyUser,unfollow} = require('../controllers/user')
const auth = require('../middleware/auth')
// const upload = require('../middleware/imageUpload')
 
//post
router.post('/signUp',addUser)
router.post('/login',login)
router.post('/authenticate')
router.post('registerMail')
router.post('/follow',auth,follow)


//get
router.get('/myuser',auth,getMyUser)
router.get('/getUser',auth,getUser)
router.get('/alluser',auth,getAllUsers)
router.get('/generateOTP',auth,generateOtp)
router.get('/verifyOTP')
router.get('createResetSession')


//put
router.put('/updateUser',auth,updateUser)
router.put('/resetPassword',auth,deleteUser)
router.put('/unfollow',auth,unfollow)


//delete
router.delete('/unfollow')



module.exports=router;