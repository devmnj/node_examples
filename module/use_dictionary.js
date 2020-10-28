//module is a basic java script

var textMessage=function (txt) {
 return 'Message : '+ txt + ' [Length :' + txt.length +  ']';
};


var lang= ['html','css','javascript'];

 module.exports={
 textMessage :textMessage,
lang : lang

};
