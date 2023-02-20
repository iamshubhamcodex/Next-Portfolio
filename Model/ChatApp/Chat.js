const mongoose = require("mongoose");
const { Schema } = mongoose;

const ChatSchema = new Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "id",
  },
  users: [{ email: String, name: String }],
  chats: [{ from: String, content: String }],
});

module.exports = mongoose.models.Chat || mongoose.model("Chat", ChatSchema);
