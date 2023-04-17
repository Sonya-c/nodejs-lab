const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer((request, response) => {
  let query = url.parse(request.url, true);
  let filename = "." + query.pathname;
  
  fs.readFile(filename, (error, data) => {
    if (error) {
      response.writeHead(404, {'Content-Type': 'text/html'});
      return response.end("404 Not Found");
    } 
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(data);
    return response.end();
  });
}).listen(8080);