const express = require("express");
const app = (express)();
const sqlite3 = require("sqlite3");
const env = require("dotenv");

const db = new sqlite3.Database("./infra/database.db");
const { PORT } = env.config().parsed;

app.use(express.json());

app.get("/todos", (req, res) =>{
    db.all('SELECT * FROM airports', (err, rows)=>{
        if(err){
            return res.json({ erroMessage: err});
        }

        return res.json(rows);
    });
});

app.get("/flight/:from/:to", (req, res) =>{
    const from = req.params.from.toUpperCase();
    const to = req.params.to.toUpperCase();
    const regex = /^[A-z]{3}$/;

    //Essa validação é apenas para testar o regex e informar onde está o erro, pois se digitasse mais de 3 caracteres, já cairia na validação de "Aeroporto não encontrado"
    if(!regex.test(from) || !regex.test(to)){
        return res.json({ erroMessage: "A sigla do aeroporto possui apenas 3 caracteres!" });
    }

    db.all("SELECT * FROM airports WHERE initials = ? or initials = ?", from, to, (err, rows)=>{
        if(err){
            return res.json({ errorMessage: err });
        }

        const objectFrom = rows.find(rows => rows.initials == from);
        const objectTo = rows.find(rows => rows.initials == to);

        if(!objectFrom || !objectTo){
            return res.json({ erroMessage: "Aeroporto não encontrado!"});
        }

        return res.json({
            "origem": from, 
            "destino": to, 
            "descricao": `Voo partindo do ${objectFrom.name} (${objectFrom.city}) até ${objectTo.name} (${objectTo.city})`
        });
    });
});

app.listen(PORT, ()=>{
    console.log(`Server running at ${PORT}...`);
})
