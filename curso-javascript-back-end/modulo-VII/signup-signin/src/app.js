const express = require("express");
const app = express();
const { PORT } = require("dotenv").config().parsed;

const usersRouter = require("../routes/userRouter");

app.use("/users", usersRouter);
console.log(usersRouter);

app.listen(PORT, console.log(`Server running at ${PORT}`));