const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();
const PORT = 8080;
const routeUser = require("./src/routes/users");
const routeAuth = require("./src/routes/auth");
const postRoute = require("./src/routes/post");

const app = express();
mongoose.set("strictQuery", false);
mongoose.connect(process.env.URL_MONGO).then(() => {
  console.log("Connected with DataBase");
});

//MIDDLEWARE
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(cors());

//ROUTES
app.use("/api/users", routeUser);

app.use("/api/auth", routeAuth);

app.use("/api/posts", postRoute);

app.listen(PORT, () => {
  console.log("Server is running");
});
