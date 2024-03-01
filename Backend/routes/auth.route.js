const express = require("express");
const router = express.Router();
const { singup, getAllUser } = require("../controllers/auth.controller");

router.get("/Users", getAllUser);
router.post("/singup", singup);

module.exports = router;
