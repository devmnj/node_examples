var events= require('events');

//Create event emitter
// this demonstrate how to create customEvent using EventEmitter
var myEmitter= new events.EventEmitter();

myEmitter.on('customEvent',function (txt){
  console.log(txt);
});

myEmitter.emit('customeEvent','the event was fired');
