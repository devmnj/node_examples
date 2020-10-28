var express=require('express');
var bodyParser=require('body-parser');

var app=express();
var urlencodeparser=bodyParser.urlencoded({extended:false});
app.set('view engine','ejs');
//middle ware
app.use('/assets',express.static('assets'));

app.get('/',function (req,res){
  res.render('index');
});
app.get('/contact',function (req,res){
  res.render('contact' ,{q:req.query});
});

app.post('/contact', urlencodeparser, function (req,res){
  console.log(req.body);
  res.render('contact-success' ,{data:req.body});
});

app.get('/post/:id',function (req,res){
  var post_data={title:'Hellow world',content:'This is the content'};
  res.render('post',{post_id:req.params.id,post_data:post_data});
});


app.listen(3000);
