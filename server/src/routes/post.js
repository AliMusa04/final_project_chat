const PostModel = require("../models/PostModel");
const { route } = require("./users");

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

//LIKE POST
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
