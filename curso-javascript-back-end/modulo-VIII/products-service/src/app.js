const express = require("express");
const env = require("dotenv");
const app = express();

const { PORT } = env.config().parsed;

const productsRouter = require("../routes/productsRouter");

app.use(express.json());
app.use("/products", productsRouter);

app.listen(PORT, console.log(`Server running at ${PORT}`));