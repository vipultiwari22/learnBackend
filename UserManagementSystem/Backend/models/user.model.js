import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
  userName: {
    type: String,
    required: [true, "username is require"],
    minlength: [5, "username charecther is minimum  5 latter"],
  },
  email: {
    type: String,
    required: true,
    lowecase: true,
    minLength: 10,
    unique: true,
  },
  password: {
    type: String,
    required: [true, "password must be require"],
    minlength: [8, "password must be 8 charecter"],
  },
  bio: {
    type: String,
    required: [true, "Bio is require"],
  },
});

const models = mongoose.model("UserData", UserSchema);
export default models;
