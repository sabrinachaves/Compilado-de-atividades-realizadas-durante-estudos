function oi(nome){
    console.log(`Oi, ${nome}` );
}

function hola(nombre){
    console.log(`Hola, ${nombre}`);
}

const cumprimentos = {
    hola: hola,
    oi: oi,
    numero: 26
}

module.exports = cumprimentos;