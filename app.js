//require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./api/users/user.router");

app.use(express.json());

app.use("/user", userRouter);
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("server up and running on PORT :", port);
});