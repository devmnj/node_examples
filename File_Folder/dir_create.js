var fs= require('fs')

//create directory - none async method
fs.mkdirSync('data');

console.log('the above  code block other...');

//remove dir

fs.rmdirSync('data');

console.log('Dir removed');
