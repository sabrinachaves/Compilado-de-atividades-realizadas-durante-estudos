const express = require("express");
const env = require("dotenv");
const app = express();

const { PORT } = env.config().parsed;

app.listen(PORT, console.log(`Server running at ${PORT}`));