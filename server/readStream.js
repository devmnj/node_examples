var http=require('http');
var fs=require('fs');

var myStream=fs.createReadStream(__dirname +'/readme.txt','utf8');

myStream.on('data',function(chunk){
  console.log('new chunk received');
  console.log(chunk);
});
