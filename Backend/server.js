const app = require("./app.js");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});

// this is for cheking details are going to db or not

// const init = async () => {
//   let user = await User.findOne({ userId: "admin" });
//   if (user) {
//     console.log("Admin is alredy Present!");
//     return;
//   }

//   try {
//     user = await User.create({
//       name: "Vipul Tiwari",
//       userId: "admin",
//       email: "tiwarivipul155@gmil.com",
//       password: bcrypt.hashSync("welcome1", 8),
//     });
//     console.log("Admin created", user);
//   } catch (error) {
//     console.log("Error while create admin", error);
//   }
// };
