const http = require('http');

const server = http.createServer();

server.on('request', (req, res) =>{
    const { method, url } = req;

    //res.setHeader('Content-Type', 'application/json') //mudar o tipo da resposta
    //res.write('<h1> Sabrina </h1>')
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify({method, url}));
    res.end();
});

server.listen(8080);