const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    max: 500,
  },
  img: {
    type: String,
  },
  comments: {
    type: Object,
    default: [],
  },
  likes: {
    type: Array,
    default: [],
  },
});

module.exports = mongoose.model("Posts", postSchema);
