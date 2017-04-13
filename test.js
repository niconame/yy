var http = require('http');
    http.createServer(function(req, res){
        res.writeHead(203);
        res.write("Hello World.");
        res.end();
}).listen(7774);
