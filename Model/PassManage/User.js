// const mongoose = require("mongoose");
// const { Schema } = mongoose;

// const UserSchema = new Schema({
//   name: String,
//   email: { type: String, unique: true },
//   mobile: String,
//   password: String,
//   mpass: String,
//   logins: [
//     {
//       name: String,
//       email: String,
//       username: String,
//       password: String,
//       category: String,
//       lastU: String,
//     },
//   ],
//   notes: [
//     {
//       name: String,
//       date: { type: Date, default: Date.now },
//       notecontent: String,
//       category: String,
//       lastU: String,
//     },
//   ],
//   ids: [
//     {
//       name: String,
//       idnumber: String,
//       additional: String,
//       category: String,
//       lastU: String,
//     },
//   ],
//   generals: [
//     {
//       name: String,
//       date: { type: Date, default: Date.now },
//       store: String,
//       category: String,
//       lastU: String,
//     },
//   ],
// });

// module.exports = mongoose.models.User || mongoose.model("User", UserSchema);
const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "id",
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobile: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.models.User || mongoose.model("User", UserSchema);
