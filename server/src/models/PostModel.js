const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
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
      type: Array,
      default: [
        {
          userIdCom: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users",
            required: true,
          },
          descCom: {
            type: String,
            required: true,
            max: 100,
          },
          commentId: {
            type: String,
          },
        },
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
