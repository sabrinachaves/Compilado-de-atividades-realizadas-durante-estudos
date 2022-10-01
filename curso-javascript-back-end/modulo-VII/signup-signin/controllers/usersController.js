const dbConn = require("../infra/dbConn");
const UserDAO = require("../dao/userDAO")(dbConn);

exports.signin = (req, res) => {
  UserDAO.findOne((err, data) => {
    if(err){
      res.json({ message: err });
    }else{
      res.json(data); 
    }
  });
};

exports.signup = (req, res) => {
  UserDAO.save();
};

// module.exports = {
//     signin: (req, res) =>{},
//     signup: (req, res) =>{}
// }
