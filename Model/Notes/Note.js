const mongoose = require("mongoose");
const { Schema } = mongoose;

const NoteSchema = new Schema({
  name: { type: String, unique: true, required: true },
  heading: String,
  belongs: String,
  contents: [{ texttype: String, content: String }],
});

module.exports = mongoose.models.Note || mongoose.model("Note", NoteSchema);
// name same as noteId
// heading same as heading
// belongs same as name
