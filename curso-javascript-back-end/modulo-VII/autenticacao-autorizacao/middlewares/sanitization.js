const sanitization = (req, res, next) =>{
    const { username } = req.body;

    req.body.username = username.replace(/\D+/g, "");

    console.log(req.body.username);
    next();
    
}

module.exports = sanitization;