const express = require("express");
const router = express.Router();
const {
  singup,
  getAllUser,
  singin,
} = require("../controllers/auth.controller");
const { veryfySignupBody } = require("../middleware/auth.middleware");

router.get("/Users", getAllUser);
router.post("/singup", singup);
router.post("/singin", singin);

module.exports = router;
