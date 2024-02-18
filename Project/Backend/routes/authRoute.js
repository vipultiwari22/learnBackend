const express = require("express");
const { Home, signup, singin } = require("../controllers/authController");
const authRouter = express.Router();

authRouter.get("/", Home);
authRouter.post("/api/auth/singup", signup);
authRouter.get("/singin", singin);

module.exports = authRouter;
