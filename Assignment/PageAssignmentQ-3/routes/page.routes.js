// routes/page.routes.js
const express = require("express");
const Home = require("../Pages/Home");
const About = require("../Pages/About");
const contact = require("../Pages/contact");

const router = express.Router();

router.get("/", Home);
router.get("/about", About);
router.get("/contact", contact);

module.exports = router;
