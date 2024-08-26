const http = require('node:http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response) => {
    console.log('Node server received a request...\n');

    if (request.url === '/') {
        console.log('This is the "/" root route.\n');

        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/plain');
        response.end('This is the "/" root route.\n');
    }
    else if (request.url === '/a') {
        console.log('This is the "/a" route.\n');

        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/plain');
        response.end('A\n');
    }
    else if (request.url === '/b') {
        console.log('This is the "/b" route.\n');

        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/plain');
        response.end('B\n');
    }
    else if (request.url === '/message') {
        console.log('This is the "/message" route.\n');

        fs.readFile('./message.html', function (errors, contents) {
            if (errors) {
                console.log(errors);
            } else {
                response.writeHead(200, { 'Content-Type': 'text/html' });
                response.write(contents);
                response.end();
            }
        })
    }

});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
}); 