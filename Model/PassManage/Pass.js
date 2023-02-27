const mongoose = require("mongoose");
const { Schema } = mongoose;

const PassSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  mobile: String,
  password: String,
  mpass: String,
  logins: [
    {
      name: String,
      email: String,
      username: String,
      password: String,
      category: String,
      lastU: String,
    },
  ],
  notes: [
    {
      name: String,
      date: { type: Date, default: Date.now },
      notecontent: String,
      category: String,
      lastU: String,
    },
  ],
  ids: [
    {
      name: String,
      idnumber: String,
      additional: String,
      category: String,
      lastU: String,
    },
  ],
  generals: [
    {
      name: String,
      date: { type: Date, default: Date.now },
      store: String,
      category: String,
      lastU: String,
    },
  ],
});

module.exports = mongoose.models.Pass || mongoose.model("Pass", PassSchema);
