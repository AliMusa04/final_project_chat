const router = require("express").Router();
const UserModel = require("../models/UserModel");

const bcrypt = require("bcrypt");

// router.get("/", (req, res) => {
//   res.send("its auth route");
// });

//REGISTER
router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(req.body.password, salt);

    const newUser = await new UserModel({
      ...req.body,
      password: hashPass,
    });

    await newUser.save();
    res.status(200).send({ message: "user created", newUser });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
