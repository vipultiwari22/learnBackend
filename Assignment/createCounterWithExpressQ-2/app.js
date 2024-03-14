const express = require("express");
const app = express();
const PORT = 3000;

let counter = 0;

app.get("/", (req, res) => {
  res.send({ Counter: counter });
});

app.get("/Increment", (req, res) => {
  Increment();
  res.send(`Counter incremented. New value: ${counter}`);
});

app.get("/Decrement", (req, res) => {
  Decrement();
  res.send(`Counter decremented. New value: ${counter}`);
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});

function Increment() {
  counter++;
}

function Decrement() {
  counter--;
}
