
const http = require('http');
const fs = require('fs');

const myServer = http.createServer((req, res) => {
    console.log(req.url, req.method);

    let filePath='./index.html';
    let contentType='text/html';
    if (req.url === '/styles.css') {
        filePath = './styles.css';
        contentType = 'text/css';
    }

    res.setHeader('Content-Type', contentType);
    fs.readFile(filePath, (err, data) => {
        err ? console.log(err) : res.write(data)
        res.end();
    });

});
myServer.listen(3000);
console.log("listening on 3000");