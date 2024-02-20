const express = require("express");
const {
  Home,
  signup,
  singin,
  CookiegetUser,
  logout,
} = require("../controllers/authController");
const { jwtAuth } = require("../middleware/jwtAuthMiddleware");
const authRouter = express.Router();

authRouter.get("/", Home);
authRouter.post("/api/auth/singup", signup);
authRouter.post("/singin", singin);
authRouter.get("/user", jwtAuth, CookiegetUser);
authRouter.get("/logout", jwtAuth, logout);

module.exports = authRouter;
