const User = require("../models/useModel.js");
exports.home = (req, res) => {
  res.send("Hello world");
};

exports.createUser = async (req, res) => {
  // extract info
  try {
    const { name, email } = req.body;
    if (!name || !email) {
      throw new Error("name and emai are required");
    }

    // const userExists = User.findeOne({ email });

    // if (userExists) {
    //   throw new Error("User alredy exists");
    // }

    const user = await User.create({
      name,
      email,
    });
    res.status(201).json({
      success: true,
      message: "User created successfully",
      user,
    });
  } catch (error) {
    console.log("Error", error);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const allusers = await User.find({});

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

exports.deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findByIdAndDelete(userId);
    res.status(200).json({
      success: true,
      message: "user deleted successfully",
    });
  } catch (error) {
    console.log("Error", error);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.editUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      success: true,
      message: "User updated successfully",
    });
  } catch (error) {
    console.log("Error", error);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
