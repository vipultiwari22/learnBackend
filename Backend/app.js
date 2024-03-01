require("dotenv").config();
const express = require("express");
const DbConnect = require("./config/db.js");
const cors = require("cors");
const router = require("./routes/auth.route.js");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
DbConnect();

// app.use("/", (req, res) => {
//   res.send("Hello World!");
// });

app.use("/api/v2/users", router);

module.exports = app;
