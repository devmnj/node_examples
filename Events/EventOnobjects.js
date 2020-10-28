
var events = require('events');
var util = require('util');

var Applicant= function(name,post){
   this.name=name;
   this.post=post;
};

util.inherits(Applicant,events.EventEmitter);
var jay=new Applicant('Jay','DBA');
var rahul=new Applicant('Rahul','Desighner');
var anne=new Applicant('Anne','Data Scientist');

var applicants=[jay,rahul,anne];

applicants.forEach(function (applicant) {
  applicant.on('register',function(){
    console.log(applicant.name + ' registered for the post of : '+ applicant.post );
  });
});

jay.emit('register');
rahul.emit('register');
anne.emit('register');
