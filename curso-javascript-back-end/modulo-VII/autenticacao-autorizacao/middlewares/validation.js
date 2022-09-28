const env = require("dotenv").config().parsed;
const { PORT, USER, PASS } = env;

const validation = (req, res) => {
    const { username, password } = req.body;
  
    const authentication = username == USER && password == PASS;
  
    if (authentication) {
      res
        .cookie("AUTH_PASS", authentication)
        .json({ message: "Usuário autenticado com sucesso!" });
    } else {
      res
      .cookie("AUTH_PASS", authentication)
      .status(403)
      .json({ errorMessage: "Senha e/ou username inválidos" });
    }
  };

  module.exports = validation;