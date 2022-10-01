const express = require("express");
const app = express();
const { PORT } = require("dotenv").config().parsed;

const usersRouter = require("../routes/usersRouter");

app.use(express.json());
app.use("/users", usersRouter);


app.listen(PORT, console.log(`Server running at ${PORT}`));