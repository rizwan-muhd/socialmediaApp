const { validate } = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userSchema = require("../models/user");
const otpGenerator = require("otp-generator");

exports.addUser = async (req, res) => {
  try {
    console.log("hello");
    // const {error} = validate(req.body);

    // if(error){
    //     return res.status(400).json({message:error.details[0].message})
    // }

    const user = await userSchema.findOne({ email: req.body.email });

    if (user) {
      return res
        .status(409)
        .json({ message: "user with given email already exits" });
    }
    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    console.log("succes");
    const newUser = await new userSchema({
      ...req.body,
      password: hashPassword,
    }).save();

    res.status(200).send({
      success: true,
      newUser,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: error,
    });
  }
};

exports.login = async (req, res) => {
  console.log("login");

  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Email and Password are required" });
  }

  const user = await userSchema.findOne({ email: req.body.email });

  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return res.status(401).json({ message: "Invalid Email or Password" });
  }
  const token = jwt.sign(
    { id: user._id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "24h" }
  );

  res.json({
    message: "Login succesfull",
    user,
    token,
  });
};

exports.getMyUser = async (req, res) => {
  try {
    const id = req.user.id;
    const user = await userSchema.findById(id);

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: error,
    });
  }
};

exports.getUser = async (req, res) => {
  console.log("enter");
  try {
    const id = req.query.id;
    const user = await userSchema.findById(id);
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: error,
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const id = req.user.id;
    await userSchema.findByIdAndUpdate(id, { $set: req.body });

    res.status(200).json({
      success: true,
      message: "User updated successfully",
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: error,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const id = req.user.id;
    await userSchema.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "deleted user successfully",
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: error,
    });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const query = { _id: { $ne: req.user.id } };
    const users = await userSchema.find(query);

    res.status(200).json({
      success: true,
      message: "all user listed",
      users,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.follow = async (req, res) => {
  try {
    console.log("try enter follwers");
    const id = req.user.id;
    const follower = req.body.userId;
    const following = await userSchema.findByIdAndUpdate(id, {
      $push: { following: follower },
    })
    const followers = await userSchema.findByIdAndUpdate(follower, {
      $push: { followers: id },
    })
    res.status(200).json({
      success: true,
      following,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: "eror",
    });
  }
};
exports.unfollow = async (req, res) => {
  try {
    console.log("enter in unfloow");
    const id = req.user.id;
    const follower = req.body.userId;
    const user = await userSchema.findOne({ _id: id });
    console.log(user.following);
    user.following.pull(follower);

    console.log(user.following)
    await user.save();

    const friend = await userSchema.findOne({ _id: follower });
    console.log(friend);
    friend.followers.pull(id);
    console.log(friend.followers)

    await friend.save();

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: error,
    });
  }
};

exports.generateOtp = async (req, res) => {
  try {
    req.app.locals.OTP = await otpGenerator.generate(6, {
      lowerCaseAlphabets: false,
      upperCaseAlphabets: false,
      specialChars: false,
    });

    res.status(200).json({
      code: req.app.locals.OTP,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: error,
    });
  }
};

exports.verifyOtp = async (req, res) => {
  const { code } = req.query;
  if (parseInt(req.app.locals.OTP) === parseInt(code)) {
    app.app.locals.OTP = null;
    req.app.locals.resetSession = true;
    return res.status(200).json({ message: "Verify Successfully" });
  }
  return res.status(400).json({ error: "Invalid OTP" });
};
