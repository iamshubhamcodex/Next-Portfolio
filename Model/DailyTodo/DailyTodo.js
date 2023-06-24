const mongoose = require("mongoose");
const { Schema } = mongoose;

const DailyTodoSchema = new Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "id",
  },
  todo: [String],
  score: Number,
});
module.exports =
  mongoose.models.DailyTodo || mongoose.model("DailyTodo", DailyTodoSchema);
