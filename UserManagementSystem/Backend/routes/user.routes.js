import express from "express";
import {
  CreateUser,
  GetAllUserData,
  isUserLoggedIn,
  loginUser,
} from "../controllers/user.controller.js";
import AuthUser from "../middleware/user.middleware.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello User!");
});
router.get("/getAllUser", GetAllUserData);
router.post("/signup", CreateUser);
router.post("/login", loginUser);
router.get("/getUserDetails",AuthUser, isUserLoggedIn);

export default router;
