
//A regular function declaration
function Message(msg){
  console.log(msg);
}

//call the function

Message('Hellow Nodejs');
Message('This is my first function')

//Function expression
var mymsg=function(){
  console.log('I am a function expression');
};

//calling the function
mymsg();

//call Function

function callfunction(fun){
  fun();
}

callfunction(mymsg);
