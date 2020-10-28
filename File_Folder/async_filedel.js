
var fs= require('fs')


fs.unlink('./readme2.txt',function (error){

      if(error){
console.log(' File does not exist');

      }else{
      console.log('File deleted');
    }
});

console.log('The file is processing ');
