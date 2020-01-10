const http = require('http');
const port = 80;

const server = http.createServer(function(req,res){
    if(req.url === '/profile'){
        res.end("Welcome to your profile");
    }
    if(req.url === '/'){
        res.end("Hello world!");
    }
});

server.listen(port);