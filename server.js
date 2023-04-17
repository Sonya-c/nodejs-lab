let http = require("http");

http.createServer((request, response) => {
    response.writeHead(200, 
        {"content-type": "text/html"}
    );
    response.end("Welcome to lab basic")
})
.listen(8080);