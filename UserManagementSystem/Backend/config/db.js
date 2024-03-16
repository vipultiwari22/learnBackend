import mongoose from "mongoose";

const DBConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `Server is connected to the Database ${mongoose.connection.host}`
    );
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default DBConnect;
