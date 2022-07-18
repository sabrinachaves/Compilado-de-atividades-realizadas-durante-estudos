const fs = require('fs');
const path = require('path');

const arquivos = fs.readdirSync(__dirname); // lista os nomes dos arquivos
console.log(arquivos);

arquivos.forEach(arquivo =>{
    const stat = fs.statSync(arquivo); //retorna informações do arquivo
    console.log(stat.isFile());
})