var http=require('http');
var fs=require('fs');

var server=http.createServer(function (req,res) {
    console.log('request was made :'+ req.url);
    if(req.url === '/home' || req.url === '/'){
      res.writeHead(200,{'Content-Type':'text/html'});
      var myStream=fs.createReadStream(__dirname +'/index.html').pipe(res);
    }
    else if(req.url === '/api' || req.url === '/'){
      res.writeHead(200,{'Content-Type':'application/json'});
      var myobj = {'name' : 'Mohith',
    'job':'developer'};
     res.end(JSON.stringify( myobj));
    }

    else if(req.url === '/contact')
      {
        res.writeHead(200,{'Content-Type':'text/html'});
        var myStream=fs.createReadStream(__dirname +'/contact.html').pipe(res);

      }
    else{
      res.writeHead(200,{'Content-Type':'text/html'});
      var myStream=fs.createReadStream(__dirname +'/notfound.html').pipe(res);
    }
});

server.listen(3000,'127.0.0.1');
console.log('hey ,now listening to port 3000');
