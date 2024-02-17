// db.js
const mongoose = require("mongoose");
const mongo_db =
  process.env.MONGO_URI || "mongodb://localhost:27017/my_database";

const connectToDb = async () => {
  mongoose
    .connect(mongo_db)
    .then((conn) => {
      console.log(`Connection Established ${conn.connection.host}`);
    })
    .catch((error) => {
      console.log("error", error.message);
      process.exit(1);
    });
};

module.exports = connectToDb; // Exporting the function directly
