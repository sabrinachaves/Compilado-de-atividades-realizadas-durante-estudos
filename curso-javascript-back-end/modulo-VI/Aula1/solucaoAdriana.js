// if (url === '/') {
        
//     const filePath = path.join(__dirname, 'index.html');
//     const site = await fsPromise.readFile(filePath, 'utf-8');

//     res.write(site);
//     res.end();


// } else if (url === '/style.css') {
//     res.writeHead(200, { 'Content-Type': 'text/css'})
//     const filePath = path.join(__dirname, 'style.css');
//     const css = await fsPromise.readFile(filePath, 'utf-8');
//     res.end(css);