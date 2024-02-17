const express = require("express");
const { Home, signup } = require("../controllers/authController");
const authRouter = express.Router();

authRouter.get("/", Home);
authRouter.post("/api/auth/singup", signup);

module.exports = authRouter;
