require("dotenv").config();

const express = require("express");
// const cors = require("cors");

const connectToDb = require("./config/db");

const app = express();
// app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectToDb();

const authRouter = require("./routes/authRoute");

app.use("/", authRouter);

module.exports = app;
