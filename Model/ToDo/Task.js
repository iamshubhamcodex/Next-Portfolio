const mongoose = require("mongoose");
const { Schema } = mongoose;

const TaskSchema = new Schema({
  title: { type: String, unique: true },
  description: String,
  belongs: String,
});
module.exports = mongoose.models.Task || mongoose.model("Task", TaskSchema);
