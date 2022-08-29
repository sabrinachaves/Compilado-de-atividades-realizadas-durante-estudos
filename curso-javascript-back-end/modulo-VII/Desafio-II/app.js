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
