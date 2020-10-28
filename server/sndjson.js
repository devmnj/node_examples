var http=require('http');
var fs=require('fs');




var server=http.createServer(function (req,res) {
    console.log('request was made :'+ req.url);
    res.writeHead(200,{'Content-Type':'application/json'});
    var myobj = {'name' : 'Mohith',
  'job':'developer'};
   res.end(JSON.stringify( myobj));
});

server.listen(3000,'127.0.0.1');
console.log('hey ,now listening to port 3000');
