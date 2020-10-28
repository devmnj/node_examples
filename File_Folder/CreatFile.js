var fs= require('fs');

//create as text filesy

var readme=fs.readFileSync('readme.txt','utf8');
console.log(readme);

console.log('Above read block other codes to be executed');

//write file
fs.writeFileSync('readme2.txt',readme);
