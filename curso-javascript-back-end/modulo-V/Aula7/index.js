const http = require('http');

const server = http.createServer();

server.on('request', (req, res) =>{
    const { method, url } = req;
    //const veiculos 

    if(method === 'GET' && url === '/'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({
            escola: 'lets code',
            ano: 2022
        }));
    }
});

server.listen(8080);

//instalar nodemon no modo dev: npm i -D nodemon
// colocar um dev no script
// rodar "npm run dev"
// Dessa forma não será preciso matar 