const User = require('../models/user');
const bcrypt = require("bcrypt");

const setCookies = require('../utils/fetures');
// all async function rape in try and catch

const registerUser = async (req, res, next) => {
   const { name, email, password } = req.body;
   const user = await User.findOne({ email });
   // if (user) return res.status(404).json({ success: false, message: "user already Exists" })
   if (!userdata) return next(new ErrorHandlerClass('user already Exists', 404));

   const hasPasswords = await bcrypt.hash(password, 10)
   const userdata = await User.create({ name, email, password: hasPasswords });
   const message = "register Sussefully";
   setCookies({ res, userdata, message });
}


const loginUser = async (req, res, next) => {
   const { email, password } = req.body;
   const userdata = await User.findOne({ email }).select("+password");
   // if (!userdata) return res.status(404).json({ success: false, message: "" });
   if (!userdata) return next(new ErrorHandlerClass('user does not  Exists', 404));

   const isMath = await bcrypt.compare(password, userdata.password);
   // if (!isMath) return res.status(404).json({ success: false, message: "login first then applay" });
   if (!isMath) return next(new ErrorHandlerClass('login first then applay', 404));
   const message = "login Sussefully";
   setCookies({ userdata, res, message })
}

const findUser = (req, res) => {

   res.status(200).json({
      success: true,
      user: req.user
   })
}
const logoutUser = async (req, res) => {
   res.status(200)
      .cookie("token", "", {
         expires: new Date(Date.now()),
         sameSite: process.env.A === "devlopment" ? 'lax' : 'none',
         secure: process.env.A === "devlopment" ? false : true,
      })
      .json({
         success: true,
      })
}
module.exports = { registerUser, findUser, logoutUser, loginUser } 