const mongoose = require("mongoose");
const testSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    questions: {
      type: Array,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    timer: {
        type: Number,
        required: true,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Test", testSchema);
