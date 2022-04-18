const mongoose = require("mongoose");
const questionSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    subcategory: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Question", questionSchema);
