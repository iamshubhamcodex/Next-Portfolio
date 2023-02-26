const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  mobile: String,
  password: String,
  mpass: String,
  logins: [
    {
      name: { type: String, unique: true },
      email: String,
      username: String,
      webName: String,
      url: String,
      category: String,
      lastU: String,
    },
  ],
  notes: [
    {
      name: { type: String, unique: true },
      date: { type: Date, default: Date.now },
      noteContent: String,
      category: String,
      lastU: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  ids: [
    {
      name: { type: String, unique: true },
      idNumber: String,
      additional: String,
      category: String,
      lastU: String,
    },
  ],
  general: [
    {
      name: String,
      date: { type: Date, default: Date.now },
      store: String,
      category: String,
      lastU: String,
    },
  ],
});

module.exports = mongoose.models.User || mongoose.model("User", UserSchema);
