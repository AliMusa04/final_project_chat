const router = require("express").Router();
const userModel = require("../models/UserModel");
const bcrypt = require("bcrypt");

//UPDATE USER PROPITY
router.put("/:id", async (req, res) => {
  if (req.body.id === req.params.id || req.body.isAdmin) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (err) {
        res.status(500).send(err);
      }
    }
    try {
      // const UpUser =
      await userModel.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).send({ message: "User updated" });
    } catch (err) {
      res.status(500).send(err);
    }
  } else {
    res.status(500).send({ message: "You don't update other's profile" });
  }
});

//DELETE USER
router.delete("/:id", async (req, res) => {
  if (req.body.id === req.params.id || req.body.isAdmin) {
    try {
      const user = await userModel.findByIdAndDelete({ _id: req.params.id });
      res.status(200).send({ message: "Account deleted succesfully", user });
    } catch (err) {
      res.status(500).send(err);
    }
  } else {
    return res.status(403).send({ message: "you can't delete other account" });
  }
});

//GET ALL USER
router.get("/", async (req, res) => {
  try {
    const users = await userModel.find();
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
