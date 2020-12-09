var express=require('express');
var app=express()
app.get('/',function(req,res){
res.send('This is a HomePage')
});

app.get('/about',function(req,res){
res.send('This is a About Page')
});

app.listen(3000)
