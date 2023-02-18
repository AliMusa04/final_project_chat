const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    req.header.authorization.split("")[1];
    const decodeToken = jwt.verify(token, process.env.JWT_KEY);
    const userId = decodeToken.id;
    req.params.id = userId;
    next();
  } catch (err) {
    res.status(401).send({
      message: "didn't access",
    });
  }
};
