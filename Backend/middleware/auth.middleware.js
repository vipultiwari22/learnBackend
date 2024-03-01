const User = require("../models/user.model");
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

module.exports = {
  veryfySignupBody: veryfySignupBody,
};
