//module is a basic java script

var textMessage=function (txt) {
  return 'Message : '+ txt + ' [Length :' + txt.length +  ']';
};


var lang=['html','css','javascript'];

//exporting the function
module.exports.textMessage=textMessage;
module.exports.lang=lang;
