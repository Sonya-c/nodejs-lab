/*
Node.js as a Web Server 

1. Crear un servidor 
2. Mostrar la URL
3. Tomar el query "name" y mostrarlo en pantalla
4. Mostrar la fecha usando el moduelo "MyModule"
*/
let http = require("http");
let url = require('url');
let date = require("./myModule");

http.createServer((request, response) => {
    response.writeHead(200, 
        {"content-type": "text/html"}
    );
    let query = url.parse(request.url, true).query;
    let name = query.name ? query.name : "Escribe tu nombre ?name=<nombre>";

    response.write("<p>Welcome to lab basic <strong>" + name + "</strong></p>");
    response.write("<p>URL: " +  request.url + "</p>");
    response.write("<p>Date:" + date.getDate() + "</p>");
    response.end()
})
.listen(8080);