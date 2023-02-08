const PostModel = require("../models/PostModel");
const UserModel = require("../models/UserModel");
const { uuid } = require("uuidv4");

const router = require("express").Router();

//CREATE POST
router.post("/", async (req, res) => {
  const newPost = await new PostModel({
    ...req.body,
  });
  try {
    await newPost.save();
    res.status(200).send({ message: "Post created", newPost });
  } catch (err) {
    res.status(500).send(err);
  }
});

//UPDATE FOR POST
router.put("/:id", async (req, res) => {
  try {
    const newPost = await PostModel.findById({ _id: req.params.id });
    if (newPost.userId === req.body.id) {
      await newPost.updateOne({ $set: req.body });
      res.status(200).send("Post updated succsefully");
    } else {
      res.status(403).send("You can't update other's post");
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

//DELETE POST
router.delete("/:id", async (req, res) => {
  try {
    const deletedPost = await PostModel.findById({ _id: req.params.id });
    if (deletedPost.userId === req.body.id) {
      await deletedPost.deleteOne();
      res.status(200).send({ message: "This Post deleted", deletedPost });
    } else {
      res.status(400).send("You can't delete  other's post ");
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

//LIKE AND DISLIKE POST
router.put("/like/:id", async (req, res) => {
  try {
    const likedPost = await PostModel.findById({ _id: req.params.id });
    if (!likedPost.likes.includes(req.body.id)) {
      await likedPost.updateOne({ $push: { likes: req.body.id } });
      res.status(200).send("Post liked");
    } else {
      await likedPost.updateOne({ $pull: { likes: req.body.id } });
      res.status(200).send("Post disliked");
    }
  } catch (err) {
    res.status(500).send(err);
  }
});
module.exports = router;

//GET POST
router.get("/:id", async (req, res) => {
  try {
    const post = await PostModel.findOne({ _id: req.params.id });
    res.status(200).send(post);
  } catch (err) {
    res.status(500).send(err);
  }
});

//GET ALL POST
router.get("/", async (req, res) => {
  try {
    const allPost = await PostModel.find()
      .populate("comments.userIdCom")
      .exec((err, data) => {
        if (err) return res.status(500).send({ err });
        res.send(data);
      });
    // .populate("userIdCom");
    // res.status(200).send(allPost);
  } catch (err) {
    res.status(500).send(err);
  }
});

//GET FRIENDS AND YOURSELF POST
router.get("/timeline/all", async (req, res) => {
  try {
    const adminUser = await UserModel.findOne({ _id: req.body.id });
    const adminPosts = await PostModel.find({ userId: adminUser._id });
    const friendsPost = await Promise.all(
      adminUser.following.map((friendId) => {
        return PostModel.find({ userId: friendId });
      })
    );
    res.status(200).send(adminPosts.concat(...friendsPost));
  } catch (err) {
    res.status(500).send(err);
  }
});

//COMMENT PUT API
router.put("/comment/:id", async (req, res) => {
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
      res.status(200).send({ message: "Comment created" });
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
