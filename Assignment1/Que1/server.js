const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
    var ul = url.parse(req.url, true);
    if(req.url == '/')
    {
        var path = "./public/index.html";
        fs.readFile(path, (err, data) => {
            if(err)
            {
                res.writeHead(404, {'Content-Type': 'text/html'});
                return res.end("404 page not found...");
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    }
    else if(ul.pathname == '/process' && req.method == 'GET')
    {
        res.write("FIRST NAME: " + ul.query.fname + " \nLAST NAME: " + ul.query.lname);
        res.end();
    }
    else if(ul.pathname == '/process' && req.method == 'POST')
    {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            res.end(body);
        });
    }
});
server.listen(8080);

console.log("The Server is Running on 8080");