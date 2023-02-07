const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
require("dotenv").config();
const PORT = 8080;
const routeUser = require("./src/routes/users");
const routeAuth = require("./src/routes/auth");

const app = express();
mongoose.set("strictQuery", false);
mongoose.connect(process.env.URL_MONGO).then(() => {
  console.log("Connected with DataBase");
});

//MIDDLEWARE
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users", routeUser);

app.use("/api/auth", routeAuth);

app.listen(PORT, () => {
  console.log("Server is running");
});
