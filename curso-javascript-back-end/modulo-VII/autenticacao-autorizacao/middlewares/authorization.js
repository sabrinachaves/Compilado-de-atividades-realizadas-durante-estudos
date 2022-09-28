const getAuthorization = (req, res, next) => {
    const auth = Boolean(req.cookies.AUTH_PASS);
  
    if (auth) {
      next();
    } else {
      res
      .status(403)
      .json({
          errorMessage: "O usuário não tem permissão para acessar essa página",
        });
    }
  };

 module.exports = getAuthorization;