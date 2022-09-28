const express = require("express");
const app = express();
const env = require("dotenv").config().parsed;
const cookieParser = require("cookie-parser");

const { PORT, USER, PASS } = env;

//Importando middlewares 
const getAuthorization = require("./middlewares/authorization")
const sanitization = require("./middlewares/sanitization");
const validation = require("./middlewares/validation");
const validatePass = require("./middlewares/validatePassword");

app.use(express.json(), cookieParser());

// Rotas de Aplicação

// Autenticação

//Middleware

app.post("/login", sanitization, validatePass, validation);

app.post("/logout", (req, res) => {
  res
    .clearCookie("AUTH_PASS")
    .status(404)
    .json({ message: "Usuário não autenticado!" });
});

// Autorização


app.get("/protected", getAuthorization, (req, res) => {
  res.json({ message: "O usuário tem permissão para acessar esta página" });
});

app.listen(PORT, console.log(`Server running at port ${PORT}...`));
