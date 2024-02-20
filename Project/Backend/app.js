require("dotenv").config();
const express = require("express");
const authRouter = require("./routes/authRoute");
const connectToDb = require("./config/db");
const cookie_parser = require("cookie-parser");
// const cors = require("cors");

const app = express();
// app.use(cors());

app.use(express.json());
app.use(cookie_parser());
app.use(express.urlencoded({ extended: true }));

connectToDb();

app.use("/", authRouter);

module.exports = app;
