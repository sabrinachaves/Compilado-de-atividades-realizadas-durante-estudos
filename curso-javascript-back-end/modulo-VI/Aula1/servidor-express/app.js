const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res)=>{
    console.log("Servidor foi chamado");
    res.send("<h1>Hello world!</h1>");
});

app.get("/users", (req, res)=>{
    console.log("Página de usuários foi solicitada");
    res.send("<h1>Página de usuários</h1>");
})

app.listen(port, () =>{
    console.log(`Server running at ${port}`);
});