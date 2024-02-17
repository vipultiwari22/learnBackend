const userModel = require("../model/userSchema");
exports.Home = (req, res) => {
  res.send("Home Details");
};

exports.signup = async (req, res, next) => {
  try {
    const userInfo = userModel(req.body);
    const result = await userInfo.save();
    return res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
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
