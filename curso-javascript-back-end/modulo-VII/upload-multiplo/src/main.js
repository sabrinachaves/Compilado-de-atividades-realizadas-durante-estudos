const express = require("express");
const app = express();
const env = require("dotenv").config().parsed;

const { PORT } = env;

//routes

//configurando aplicação
app.set("view engine", "ejs"); //definição da template engine
app.set("views", "views") //o segundo parâmetro é o nome da pasta, o primeiro é para informar a configuração
app.use(express.static("public")); //definir a pasta onde tem arquivos estáticos

const uploadRouter = require("../routes/upload");
app.use("/", uploadRouter); // transformamos as rotas em um middleware e chamamos na rota upload

app.listen(PORT, console.log(`Server running at ${PORT}...`));