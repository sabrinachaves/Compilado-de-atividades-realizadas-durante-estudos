const fs = require('fs');

//VERSÃO SÍNCRONA

// const arquivos = fs.readdirSync(__dirname); // lista os nomes dos arquivos
// console.log(arquivos);

// arquivos.forEach(arquivo =>{
//     const stat = fs.statSync(arquivo); //retorna informações do arquivo
//     console.log(stat.isFile());
// })


// VERSÃO ASSÍNCRONA

fs.readdir(__dirname, (err, arquivos) =>{
    arquivos.forEach(arquivo => {
        fs.stat(arquivo, (err, stat) =>{
            console.log(`${arquivo} é pasta? ${stat.isDirectory()}`);
        });      
    });
});



