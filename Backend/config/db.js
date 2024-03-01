const mongoose = require("mongoose");

const DbConnect = async () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then((conn) => {
      console.log(`connection Established ${conn.connection.host}`);
    })
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });
};

module.exports = DbConnect;
