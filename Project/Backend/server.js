const PORT = process.env.POT || 5000;
const app = require("./app");

app.listen(PORT, (req, res) => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
