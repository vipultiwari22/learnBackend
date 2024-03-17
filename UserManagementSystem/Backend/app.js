import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import DBConnect from "./config/db.js";
import router from "./routes/user.routes.js";
import cookieParser from "cookie-parser";
dotenv.config();

const app = express(); // Use const instead of assigning to app directly

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "http://127.0.0.1:5500", // Allow requests from this origin
    credentials: true, // Include credentials (cookies, authorization headers) in CORS requests
  })
);

app.use(cookieParser());

// app.use("/", (req, res) => {
//   res.send("Hello");
// });

app.use("/api/v1/user", router);

DBConnect();

export default app;
