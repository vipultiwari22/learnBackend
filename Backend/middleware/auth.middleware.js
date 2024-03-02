require("dotenv").config();
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const veryfySignupBody = async (req, res, next) => {
  try {
    if (!req.body.name) {
      return res.status(400).json({
        success: false,
        message: "Faild ! name was not provided in req body!",
      });
    }
    // emals
    if (!req.body.email) {
      return res.status(400).json({
        success: false,
        message: "Faild ! email was not provided in req body!",
      });
    }
    //   userId

    if (!req.body.userId) {
      return res.status(400).json({
        success: false,
        message: "Faild ! userId was not provided in req body!",
      });
    }

    //   user

    const user = await User.findOne({ userId: req.body.userId });

    if (user) {
      return res.status(400).json({
        success: false,
        message: "Faild ! user with same useID is Alredy presents",
      });
    }
  } catch (error) {
    console.log("Error", error);
    res.status(500).json({
      success: false,
      message: "Error while valdating req",
    });
  }
};
const isLoggedIn = async (req, res, next) => {
  try {
    //  check if the token is present in to header
    const token = req.headers["x-access-token"];

    if (!token) {
      return res.status(400).json({
        success: false,
        message: "No token Found!",
      });
    }

    // if it is the valid token

    jwt.verify(token, process.env.MY_SECRET, async (err, decoded) => {
      if (err) {
        return res.status(400).json({
          success: false,
          message: "Unauthorized token!",
        });
      }
      const user = await User.findOne({ email: decoded.email });
      if (!user) {
        res.status(400).json({
          success: false,
          message: "User token does not exist!",
        });
      }
      next();
    });

    //  Then move to the next step
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
module.exports = {
  veryfySignupBody: veryfySignupBody,
  isLoggedIn: isLoggedIn,
};
