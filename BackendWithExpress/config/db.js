// db.js
const mongoose = require("mongoose");

const connectToDb = async () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then((conn) => {
      console.log(`Connection Established ${conn.connection.host}`);
    })
    .catch((error) => {
      console.log("error", error.message);
      process.exit(1);
    });
};

module.exports = connectToDb; // Exporting the function directly
