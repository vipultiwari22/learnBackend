import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

// Using cookie-parser middleware to parse cookies

const isLoggedIn = async (req, res, next) => {
  try {
    // Check if the token is present in the cookie
    const token = req.cookies.token;

    if (!token) {
      return res.status(400).json({
        success: false,
        message: "No token found in cookies!",
      });
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.MY_SECRET);

    // Find the user based on decoded token data
    const user = await User.findOne({
      email: decoded.email,
    });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User associated with the token not found!",
      });
    }

    // Attach the user object to the request for further processing
    req.user = user;

    next(); // Move to the next middleware/route handler
  } catch (error) {
    // Handle any errors
    return res.status(500).json({
      success: false,
      message: "Internal server error!",
    });
  }
};

export default isLoggedIn;
