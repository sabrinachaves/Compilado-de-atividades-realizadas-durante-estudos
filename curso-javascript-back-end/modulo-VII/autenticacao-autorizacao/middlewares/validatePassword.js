const validatePass = (req, res, next) => {
    const { password } = req.body;
    const validate = {}; 
    const MIN_RULES = 4;

    password.split(""). forEach(char => {
        const charCode = char.charCodeAt();

        if(charCode >= 65 && charCode <= 90) validate.upperCase = true;
        if(charCode >= 97 && charCode <= 122) validate.lowerCase = true;
        if(charCode >= 48 && charCode <= 57) validate.number = true;
        if(charCode >= 32 && charCode <= 47) validate.special = true;
        if(charCode >= 58 && charCode <= 64) validate.special = true;
        if(charCode >= 91 && charCode <= 96) validate.special = true;
    });;

    if(Object.keys(validate).length == MIN_RULES){
        next();
    }else{
        res.json({ errorMessage: "Você inseriu uma senha fraca!" })
    }

    
}

module.exports = validatePass;