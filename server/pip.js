var http=require('http');
var fs=require('fs');

var myStream=fs.createReadStream(__dirname +'/readme.txt','utf8');
var mywStream=fs.createWriteStream(__dirname +'/writeme.txt');

myStream.pipe(mywStream);
 
