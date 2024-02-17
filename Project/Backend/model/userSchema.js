const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      maxLength: [20, "Name must be less then 20 char"],
      minLength: [5, "Name must be less then 5 char"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
      lowercase: true,
      unique: [true, "alredy registered"],
    },
    password: {
      type: String,
      select: false,
      required: [true, "Password is required"],
      maxLength: [20, "Password must be less then 16 VarChar"],
    },
    forgotPasswordToken: {
      type: String,
    },
    forgotPasswordExpirydate: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("User", userSchema);
