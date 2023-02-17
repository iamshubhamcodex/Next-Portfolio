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
