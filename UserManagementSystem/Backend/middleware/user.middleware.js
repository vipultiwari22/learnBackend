import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import cookieParser from "cookie-parser";

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
    jwt.verify(token, process.env.MY_SECRET, async (err, decoded) => {
      if (err) {
        return res.status(401).json({
          success: false,
          message: "Unauthorized token!",
        });
      }

      // Find the user based on decoded token data
      const user = await User.findOne({
        _id: decoded._id, // Assuming _id is the correct property in the decoded token
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
    });
  } catch (error) {
    // Handle any other errors
    return res.status(500).json({
      success: false,
      message: "Internal server error!",
    });
  }
};

export default isLoggedIn;
