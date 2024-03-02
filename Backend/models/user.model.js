const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
  userId: {
    type: String,
    // required: true,
  },
  password: {
    type: String,
    requird: true,
  },
  email: {
    type: String,
    required: true,
    lowecase: true,
    minLength: 10,
    unique: true,
  },
  userType: {
    type: String,
    required: true,
    defulat: "CUSTOMER",
    enum: ["CUSTOMER", "ADMIN"],
  },
});
const models = mongoose.model("NewUserDb", UserSchema);
module.exports = models;
