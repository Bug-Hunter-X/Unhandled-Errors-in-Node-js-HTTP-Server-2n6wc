const http = require('http');

const requestListener = (request, response) => {
  try {
    response.writeHead(200);
    response.end('Hello, World!');
  } catch (error) {
    console.error('Error handling request:', error);
    response.writeHead(500);
    response.end('Internal Server Error');
  }
};

const server = http.createServer(requestListener);

// Handle potential errors during server startup
const handleServerErrors = (error) => {
  if (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

server.on('error', handleServerErrors);

server.listen(8080, handleServerErrors);
console.log('Server is running on port 8080');