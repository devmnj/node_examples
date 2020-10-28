
var fs= require('fs')

//create directory - none async method and  also check error 
fs.mkdir('data',function (error){

      if(error){
console.log('Dir exist');

      }else{
      console.log('Data dir created');
    }
});

console.log('The data directory processing ');
