const http = require('http');
const fs = require('fs');

const indexHtml = fs.readFileSync('./index.html', 'utf-8');
const stylesCss = fs.readFileSync('./style.css', 'utf-8');
const scriptJs = fs.readFileSync('./script.js', 'utf-8');

const server =http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(indexHtml);
    } else if (req.url === '/style.css') {
        res.writeHead(200, {'Content-Type': 'text/css'});
        res.end(stylesCss);
    }  else if (req.url === '/script.js') {
        res.writeHead(200, {'Content-Type': 'text/js'});
        res.end(scriptJs);
    } 

    else {
        res.writeHead(404, { 'Content-Type' : 'text/plain'});
        res.end('404 Not Found');
    }
});

const port = 80;

server.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
});