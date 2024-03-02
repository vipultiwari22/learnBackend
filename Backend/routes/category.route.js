const express = require("express");
const router = express.Router(); // Change "Route" to "Router"

const {
  CreateNewCategory,
  GetAllCategory,
} = require("../controllers/category.controller");
const { isLoggedIn } = require("../middleware/auth.middleware");

router.post("/create-category", isLoggedIn, CreateNewCategory);
router.get("/Getcategory", isLoggedIn, GetAllCategory);

module.exports = router;
