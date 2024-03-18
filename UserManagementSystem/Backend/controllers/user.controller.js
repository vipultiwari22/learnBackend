import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import cookie from "cookie-parser";
import dotenv from "dotenv";

dotenv.config();

export const GetAllUserData = async (req, res, next) => {
  try {
    const getUser = await User.find({}).select("-password");
    if (!getUser) {
      res.status(400).json({
        success: false,
        message: "User's not foud!",
      });
    }
    res.status(200).json({
      success: true,
      message: "User Data",
      getUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const CreateUser = async (req, res, next) => {
  const { name, userName, email, password, bio } = req.body;
  if (!name || !userName || !email || !password || !bio) {
    return res.status(400).json({
      success: false,
      message: "Details not found in req body",
    });
  }

  try {
    // Check if a user with the given email already exists
    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({
        success: false,
        message: "User already exists!",
      });
    }

    const hashedPassword = bcrypt.hashSync(password, 8);
    const user = await User.create({
      name,
      userName,
      email,
      password: hashedPassword,
      bio,
    });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not created",
      });
    }

    return res.status(200).json({
      success: true,
      message: "User created successfully!",
      user,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Function to handle user login
export const loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  // Check if email and password are provided
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email and password are required!",
    });
  }

  try {
    // Find user by email
    const user = await User.findOne({ email });

    // If user is not found, return 401 Unauthorized
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Authentication failed. User not found.",
      });
    }

    // Check if password is correct
    const passwordIsValid = bcrypt.compareSync(password, user.password);
    if (!passwordIsValid) {
      return res.status(401).json({
        success: false,
        message: "Authentication failed. Incorrect password.",
      });
    }

    // Generate JWT token
    const token = jwt.sign(
      { _id: user._id, email: user.email },
      process.env.MY_SECRET,
      { expiresIn: "1d" } // Token expires in 1 day
    );
    // Set token into the cookie
    res.cookie("token", token, {
      httpOnly: true, // Ensures the cookie is only accessible via HTTP(S) requests
      maxAge: 2 * 60 * 60 * 1000, // Expires in 2 hours (in milliseconds)
    });

    // Return token and success message
    res.status(200).json({
      success: true,
      message: "Logged in successfully!",
      token,
    });
  } catch (error) {
    // Handle any errors
    console.error("Error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};

// Function to verify user login status
// import User from "../models/user.model.js";
export const getUserDetails = async (req, res) => {
  try {
    const userEmail = req.headers["User-Email"];
    console.log(userEmail); // Access user email from request headers

    // Use the user email to fetch user details from the database or API
    const userDetails = await User.findOne({ email: userEmail });

    if (!userDetails) {
      return res.status(404).json({
        success: false,
        message: "User details not found!",
      });
    }

    // Send the user details in the response
    res.status(200).json({
      success: true,
      message: "User details",
      user: userDetails,
    });
  } catch (error) {
    console.error("Error fetching user details:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};
