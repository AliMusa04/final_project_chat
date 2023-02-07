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

router.post("/login", async (req, res) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email });
    if (!user) return res.status(404).send({ message: "Email is incorrect" });

    const correctPass = await bcrypt.compare(req.body.password, user.password);
    if (!correctPass)
      return res.status(404).send({ message: "password is incorrect" });

    res.status(200).send(user);
  } catch (err) {
    res.status(500).send({ err });
  }
});
module.exports = router;
