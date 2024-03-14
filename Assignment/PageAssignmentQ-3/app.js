const express = require("express");
const router = require("./routes/page.routes");
app = express();

const PORT = 3000;

app.use(express.json());

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server is runnnig at ${PORT}`);
});
