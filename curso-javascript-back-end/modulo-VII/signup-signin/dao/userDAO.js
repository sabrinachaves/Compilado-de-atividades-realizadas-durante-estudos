class UserDAO{
    constructor(dbConn) {
        this.db = dbConn;
    }

    findOne(cb){
        const sql = `SELECT * FROM users`
        this.db.all(sql, cb);
    }

    save(){
        console.log("saving user data...");
    }
}


module.exports = (dbConn) =>{
    return new UserDAO(dbConn);
}

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

