var http=require('http');

var server=http.createServer(function (req,res) {
    console.log('request was made :'+ req.url);
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('hey I am from Nodejs');
});

server.listen(3000,'127.0.0.1');
console.log('hey ,now listening to port 3000');
