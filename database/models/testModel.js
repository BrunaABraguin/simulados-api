const mongoose = require("mongoose");
const testSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    questions: {
      type: Array,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    timer: {
      type: Number,
      required: true
    },
  },
  {
    timestamps: true,
    toObject: {
      transform: function (doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

module.exports = mongoose.model("Test", testSchema);
