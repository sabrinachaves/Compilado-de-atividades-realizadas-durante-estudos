const fs = require('fs');
const path = require('path');

if (process.argv.length < 3) {
    console.log('Faltando especificar a pasta');
    process.exit();
}

const argumento = process.argv[2];
const caminhoDaPasta = path.isAbsolute(argumento) ? argumento : path.join(__dirname, argumento);

const infoDoCaminho = fs.statSync(caminhoDaPasta);
if (infoDoCaminho.isFile()) {
    console.log('O argumento não é uma pasta');
    process.exit();
}

const conteudoDaPasta = fs.readdirSync(caminhoDaPasta);

conteudoDaPasta.forEach(arquivoOuPasta => {
    const caminhoCompleto = path.join(caminhoDaPasta, arquivoOuPasta);
    const info = fs.statSync(caminhoCompleto);
    const prefix = info.isDirectory() ? 'pasta: ' : 'arquivo: ';
    console.log(`${prefix}${arquivoOuPasta}`);
});