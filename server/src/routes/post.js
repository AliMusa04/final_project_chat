const PostModel = require("../models/PostModel");
const UserModel = require("../models/UserModel");
const { uuid } = require("uuidv4");
const authMiddle = require("../middleware/authMiddle");

const router = require("express").Router();

//CREATE POST
router.post("/", authMiddle, async (req, res) => {
  const newPost = await new PostModel({
    ...req.body,
    userId: req.body.id,
  });
  try {
    await newPost.save();
    res.status(200).send({ message: "Post created", newPost });
  } catch (err) {
    res.status(500).send(err);
  }
});

//UPDATE FOR POST
// router.put("/:id", authMiddle, async (req, res) => {
//   try {
//     const newPost = await PostModel.findById({ _id: req.params.id });
//     if (newPost.userId === req.body.id) {
//       await newPost.updateOne({ $set: req.body });
//       res.status(200).send("Post updated succsefully");
//     } else {
//       res.status(403).send("You can't update other's post");
//     }
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });

//DELETE POST
router.delete("/:id", authMiddle, async (req, res) => {
  try {
    const post = await PostModel.findById(req.params.id);
    if (post.userId._id === req.body.id) {
      await PostModel.deleteOne();
      res.status(200).json("the post has been deleted");
    } else {
      res.status(403).json("you can delete only your post");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//LIKE AND DISLIKE POST
router.put("/like/:id", authMiddle, async (req, res) => {
  try {
    const likedPost = await PostModel.findById({ _id: req.params.id }).populate(
      "userId"
    );
    if (!likedPost.likes.includes(req.body.id)) {
      await likedPost.updateOne({ $push: { likes: req.body.id } });
      res.status(200).send({ message: "Post liked" });
    } else {
      await likedPost.updateOne({ $pull: { likes: req.body.id } });
      res.status(200).send({ message: "Post disliked" });
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

//GET POST
// router.get("/:id", async (req, res) => {
//   try {
//     const post = await PostModel.findOne({ _id: req.params.id });
//     res.status(200).send(post);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });

// GET ALL POST
router.get("/", async (req, res) => {
  try {
    const allPost = await PostModel.find()
      .populate("userId")
      .exec((err, data) => {
        if (err) return res.status(500).send({ err });
        res.send(data);
      });
    // .populate("userId");
    // res.status(200).send(allPost);
  } catch (err) {
    res.status(500).send(err);
  }
});

//GET FRIENDS AND YOURSELF POST
router.get("/timeline/:id", authMiddle, async (req, res) => {
  try {
    // if (req.body.id === req.params.id) {
    const adminUser = await UserModel.findOne({ _id: req.body.id });
    const adminPosts = await PostModel.find({
      userId: adminUser._id,
    }).populate("userId");
    const friendsPost = await Promise.all(
      await adminUser.following.map((friendId) => {
        return PostModel.find({ userId: friendId }).populate("userId");
      })
    );
    res.status(200).send(adminPosts.concat(...friendsPost));
    // } else {
    //   res.status(401).send({ message: "you are not admin" });
    // }
  } catch (err) {
    res.status(500).send(err);
  }
});

//ROUTER GET user post only
router.get("/profile/:username", async (req, res) => {
  try {
    const user = await UserModel.findOne({ username: req.params.username });
    const posts = await PostModel.find({ userId: user._id }).populate("userId");
    res.status(200).send(posts);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

//COMMENT PUT API
router.put("/comment/:id", authMiddle, async (req, res) => {
  try {
    const commentPost = await PostModel.findById({ _id: req.params.id });
    if (commentPost) {
      await commentPost.updateOne({
        $push: {
          comments: {
            userIdCom: req.body.id,
            descCom: req.body.desc,
            commentId: uuid(),
          },
        },
      });
      res.status(200).send({ message: "Comment created", descCom });
    } else {
      res.status(403).send("this post isn't exsits");
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

//COMMENT DELETE API
// router.delete("/comment/:id", async (req, res) => {
//   try {
//     const postUser = await PostModel.findById({ _id: req.body.postId });

//     if (postUser.userId === req.body.userid) {
//       await postUser.comments.findByIdAndDelete({ commentId: req.params.id });
//       res.status(200).send("Comment deleted");
//       // res.status(200).send({ message: "This Post deleted", deletedPost });
//       // await deletedPost.updateOne({$pull:});
//     } else {
//       res.status(400).send("You can't delete  other's post ");
//     }
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });

// userIdCom: req.body.id, descCom: req.body.desc
module.exports = router;
