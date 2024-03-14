const express = require("express");
const random = require("./RandomNuber");

const app = express(); // Correctly initializes Express
const PORT = 3000;

app.use("/", random);

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
