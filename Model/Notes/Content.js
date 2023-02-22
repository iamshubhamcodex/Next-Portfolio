const mongoose = require("mongoose");
const { Schema } = mongoose;

const ContentSchema = new Schema({
  name: { type: String, unique: true, required: true },
  contents: [{ heading: String, noteId: String }],
});

module.exports =
  mongoose.models.Content || mongoose.model("Content", ContentSchema);
