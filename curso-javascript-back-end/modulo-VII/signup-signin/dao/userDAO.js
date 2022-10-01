const crypto = require("crypto");
const { ulid } = require("ulid"); //gerador de ids

class UserDAO {
  constructor(dbConn) {
    this.db = dbConn;
  }

  findOne(data, cb) {
    const { email, password } = data;
    const sql = `SELECT * FROM users WHERE email = ?;`;

    this.db.get(sql, [email], (err, data) => {
      if (data) {
        const { salt, hash, id } = data;
        const recalcHash = crypto
          .pbkdf2Sync(password, salt, 1000, 64, "sha512")
          .toString("hex");
        cb(err, id, hash === recalcHash);
      } else {
        cb(err, data, false);
      }
    });
  }

  save(data, cb) {
    const { name, email, password } = data;
    const salt = crypto.randomBytes(16).toString("hex");
    const hash = crypto
      .pbkdf2Sync(password, salt, 1000, 64, "sha512")
      .toString("hex");
    const sql = `INSERT INTO users (id, name, email, hash, salt) VALUES (?, ?, ?, ?, ?)`;
    this.db.run(sql, [ulid(), name, email, hash, salt], cb);
  }
}

module.exports = (dbConn) => {
  return new UserDAO(dbConn);
};

// se os métodos forem estáticos
// class UserDAO{
//     static save(){
//         console.log("saving user data...");
//     }

//     static findOne(){
//         console.log("saving user data...");
//     }
// }

// module.exports = UserDAO;
