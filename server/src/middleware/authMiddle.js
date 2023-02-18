const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const accessToken = req.headers["authorization"];
    const token = accessToken && accessToken.split(" ")[1];
    if (!token) return res.status(401).send("Unauthorized user");
    const decodeToken = jwt.verify(token, process.env.JWT_KEY);
    req.body.id = decodeToken.id;
    next();
    // const token = req.header.authorization.split(" ")[1];
    // const decodeToken = jwt.verify(token, process.env.JWT_KEY);
    // const userId = decodeToken.id;
    // req.params.id = userId;
    // next();
    // (err, user) => {
    //   if (err) return res.status(403).send("Error while verifying user");
    //   req.params.id = user;
    // }
  } catch (err) {
    res.status(401).send({
      message: "didn't access",
    });
  }
};
