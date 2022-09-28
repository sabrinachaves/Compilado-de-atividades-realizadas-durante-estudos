const env = require("dotenv").config().parsed;
const express = require("express");
const app = express();

const { PORT } = env;

// Roteamento 
// Para instalar uma dependência para desenvolvimento basta adicionar --save-dev

app.use(express.json());

const handler = (req, res)=> {

    console.log(`Query params`, req.query);
    console.log(`Path params`, req.params);
    console.log(`Body req`, req.body);

    res.end(`Response ${req.method}`);
}

app.get("/books/:id", handler);

app.post("/books", handler);

app.put("/books", handler);

app.patch("/books", handler);

app.delete("/books", handler);


// Roteamento avançado
// Caracteres especiais (colocar a direita):
// ? - Opcional
// + - Repetidor
// *  - Aceita tudo que vier depois do *
// () - Agrupador
// | - Ou
// Importantes não dar espaço entre os caracteres porque é uma url

const advancedHandler = (req, res) => {

    res.end(`End: ${req.url}`);
};

app.get("/pages", advancedHandler);

app.listen(PORT, console.log(`Server running at port ${PORT}...`));