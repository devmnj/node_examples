var fs= require('fs');

//create as text filesy

fs.readFile('readme.txt','utf8',function (err,data){
console.log(data);
});

console.log('The Async read let other codes to be executed before it finished');
