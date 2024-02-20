const userModel = require("../model/userSchema");
const emailValidator = require("email-validator");
const bcrypt = require("bcrypt");

exports.Home = async (req, res) => {
  try {
    const allusers = await userModel.find({});

    res.status(200).json({
      success: true,
      allusers,
    });
  } catch (error) {
    console.log("Error", error);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.signup = async (req, res, next) => {
  const { name, email, password, confirmPassword } = req.body;

  if (!name || !email || !password || !confirmPassword) {
    return res.status(400).json({
      success: false,
      message: "Every field is required",
    });
  }

  const emailvlidate = emailValidator.validate(email);

  if (!emailvlidate) {
    return res.status(400).json({
      success: false,
      message: "Please provide a valid email id",
    });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({
      success: false,
      message: "Password and ConfirmPassword is not valid",
    });
  }

  try {
    const userInfo = userModel(req.body);
    const result = await userInfo.save();
    return res.status(200).json({
      success: true,
      data: result,
    });
  } catch (err) {
    if (err.code == 11000) {
      res.status(400).json({
        success: false,
        message: "Account Alredy Exists with provided email id",
      });
    }
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

exports.singin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.send(400).json({
      success: false,
      message: "Every filed is mandatory",
    });
  }

  try {
    const user = await userModel
      .findOne({
        email,
      })
      .select("+password");

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({
        success: false,
        message: "you give Wrong Credentials",
      });
    }

    const token = user.jwtToken();
    user.password = undefined;

    const cookieOption = {
      maxAge: 24 * 60 * 60 * 1000,
      httpOnly: true,
    };
    res.cookie("token", token, cookieOption);
    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.CookiegetUser = async (req, res) => {
  const userId = req.user.id;
  try {
    const user = await userModel.findById(userId);
    return res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      data: error.message,
    });
  }
};

exports.logout = (req, res) => {
  try {
    const CookieOption = {
      expires: new Date(),
      httpOnly: true,
    };
    res.cookie("token", null, CookieOption);
    res.status(200).json({
      success: true,
      message: "Logged Out",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
