const express = require("express");
const app = express();

app.use("/", (req, res) => {
  res.status(200).json({ data: "Json server" });
});

module.exports = app;