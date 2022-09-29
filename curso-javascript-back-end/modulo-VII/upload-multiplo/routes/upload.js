const express = require("express");
const router = express.Router(); //construtor de rotas do contexto do express

router.get("/", (req, res) => {
    res.render("index");
});

router.post("/upload", (req, res) =>{
    
});

router.get("/success", (req, res) =>{
    res.render("success");
});

router.get("/error", (req, res)=>{
    res.render("error");
});

module.exports = router;