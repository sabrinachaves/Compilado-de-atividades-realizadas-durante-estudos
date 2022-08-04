const express = require('express');
const app = express();
const alunos = require('./alunos');

const port = 8081;

app.use(express.json());

app.get('/alunos', (req, res) =>{
    //res.type("application/json");
    res.json(alunos);
});

app.post('/alunos', (req, res) =>{
    //res.type("application/json");
    //console.log(req.body);
    const novaAluna = req.body;
    alunos.push(novaAluna);
    res.json(alunos);
});

app.listen(port, () =>{
    console.log(`Server running is ${port}`);
});