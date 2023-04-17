/*
Node.js File system module

1. Leer el archivo index y mostrarlo en pantalla 
2. Añadir una line al archivo "myFile.txt" que contenga el nombre del usuario (query url) y la fecha en que ingreso
*/
const fs = require('fs');
const http = require('http');
const url = require('url');
const date = require("./myModule");

http.createServer((request, response) => {
    // Read files
    fs.readFile('./index.html', function(error, data) {
        response.writeHead(200, {'Content-Type': 'text/html'});
        
        if (error) response.write("Error")
        else response.write(data);
        
        return response.end();
    });

    // Write a file
    let query = url.parse(request.url, true).query;
    let name = query.name;
    
    if (name) {
        let txt = "nombre : " + name + " ingreso en " + date.getDate();;
        fs.appendFile('myFile.txt', txt, function (error) {
            if (error) throw error;
            console.log('Updated!');
        });
    } else {
        console.log("Name is undefined")
    }
}).listen(8080);
