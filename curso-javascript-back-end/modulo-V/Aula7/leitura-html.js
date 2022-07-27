const fsPromises = require('fs').promises;
const path = require('path');
const http = require('http');

const server = http.createServer();

const caminhoArquivo = path.join(__dirname, './index.html');

fsPromises.readFile(caminhoArquivo, 'utf-8')
.then(conteudo =>{

    server.on('request', (req, res) =>{
        const { method, url } = req;
        
        res.setHeader('Content-Type', 'text/html');
        
        res.write(conteudo);
        res.end()
    })

    server.listen(8080);
})

