const dbConn = require("../infra/dbConn");
const UserDAO = require("../dao/userDAO")(dbConn);
const crypto = require("crypto");

exports.signin = (req, res) => {
    UserDAO.findOne(req.body, (err, data, pwdIsValid) => {
        if (data && pwdIsValid) {
          res.status(200).json({ message: "Logged in successfully" });
        }
    
        if (data && !pwdIsValid) {
          res.status(400).json({ message: "User or password is wrong" });
        }
    
        if (data === undefined) {
          res.status(404).json({ message: "User not found" });
        }
    
        if (err) {
          res.status(500).json({ message: "Server unavailable" });
        }
      });
    };

exports.signup = (req, res) => {
  UserDAO.save(req.body, (err) => {
    if(err) {
        res.status(500).json({ message: `Falhou ao adicionar o usuário!` });
    } else{
        res.status(201).json({ message: "Usuário adicionado com sucesso!" })
    }
  });
};

// module.exports = {
//     signin: (req, res) =>{},
//     signup: (req, res) =>{}
// }
