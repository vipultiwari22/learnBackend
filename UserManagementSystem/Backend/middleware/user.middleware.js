import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import dotenv from "dotenv";

dotenv.config();

const AuthUser = async (req, res, next) => {
  try {
    // Check if the token is present in the cookie
    const token = req.cookies.token;
    console.log(token);
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized. No token found in cookies!",
      });
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.MY_SECRET);

    // Find the user based on decoded token data
    const user = await User.findOne({
      email: decoded.email,
      _id: decoded._id,
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User associated with the token not found!",
      });
    }

    // Attach the user object to the response for further processing
    res.locals.user = user;

    // Move to the next middleware/route handler
    next();
  } catch (error) {
    // Handle token verification errors
    console.error("Error verifying token:", error);

    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized. Invalid token.",
      });
    } else if (error instanceof jwt.TokenExpiredError) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized. Token has expired.",
      });
    }

    // For other errors, return a generic internal server error
    return res.status(500).json({
      success: false,
      message: "Internal server error!",
    });
  }
};

export default AuthUser;
