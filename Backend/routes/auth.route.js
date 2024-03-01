const express = require("express");
const router = express.Router();
const { singup, getAllUser } = require("../controllers/auth.controller");
const { veryfySignupBody } = require("../middleware/auth.middleware");

router.get("/Users", getAllUser);
router.post("/singup", veryfySignupBody, singup);

module.exports = router;
