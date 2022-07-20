const http = require('http');
const { rawListeners } = require('process');

const server = http.createServer(); //vai ouvir o nosso endereço de IP - localhost

server.on('request', (req, res) => { //req: requisição e res: resposta
    res.write('Let\'s Code');
    res.end();
});

server.listen(8080);