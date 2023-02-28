const mongoose = require("mongoose");
const { Schema } = mongoose;

const CategorySchema = new Schema({
  name: { type: String, unique: true },
});
module.exports =
  mongoose.models.Category || mongoose.model("Category", CategorySchema);
