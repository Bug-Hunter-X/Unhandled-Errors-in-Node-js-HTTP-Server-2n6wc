const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.listen(8080);
console.log('Server is running on port 8080');

//The issue is that the server might not properly handle errors or unexpected situations, leading to crashes or unexpected behavior.  Error handling is missing.