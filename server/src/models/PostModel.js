const { string } = require("joi");
const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
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
      type: Array,
      default: [
        // {
        //   userIdCom: {
        //     type: String,
        //   },
        //   descCom: {
        //     type: String,
        //   },
        //   commentId: {
        //     type: String,
        //   },
        // },
      ],
    },
    likes: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Posts", postSchema);
