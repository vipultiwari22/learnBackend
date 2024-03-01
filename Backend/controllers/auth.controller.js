const User = require("../models/user.model");
const bcrypt = require("bcryptjs");

exports.getAllUser = async (req, res) => {
  try {
    // Select only the fields you want to include
    const users = await User.find({}).select("-password");

    res.status(200).json({
      success: true,
      message: "All Users",
      users: users, // Renamed to 'users' for clarity
    });

    // console.log(users);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error retrieving users",
      error: error.message,
    });
  }
};

exports.singup = async (req, res) => {
  const req_body = req.body;
  const userObj = {
    name: req_body.name,
    email: req_body.email,
    userId: req_body.userId,
    userType: req_body.userType,
    password: bcrypt.hashSync(req_body.password, 8),
  };

  try {
    const user = await User.create(userObj);

    const res_user = {
      name: user.name,
      email: user.email,
      userId: user.userId,
      userType: user.userType,
    };
    res.status(201).json({
      success: true,
      message: "user created successfully!",
      res_user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Error${error.message}`,
    });
  }
};
