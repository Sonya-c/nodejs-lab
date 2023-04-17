const fs = require('fs');
const http = require('http');
const url = require('url');
const formidable = require('formidable');

http.createServer((request, response) => {
    if (request.url == '/fileupload') {
        let form = new formidable.IncomingForm();

        form.parse(request, (error, fields, files) => {
            response.write('File uploaded');
            response.end();
        });

    } else {
        fs.readFile('./form.html', (error, data) => {
            response.writeHead(200, {'Content-Type': 'text/html'});
            
            if (error) response.write("Error")
            else response.write(data);
            
            response.end();
        });
    }

}).listen(8080);