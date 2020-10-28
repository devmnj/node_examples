var express=require('express');


var app=express();
app.set('view engine','ejs');

app.get('/',function (req,res){
  res.send('This is the home page');
});

app.get('/home',function (req,res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/contact',function (req,res){
  res.send('Th is is the contact page!');
});

app.get('/post/:id',function (req,res){
  var post_data={title:'Hellow world',content:'This is the content'};
  res.render('post',{post_id:req.params.id,post_data:post_data});
});

app.get('/posts',function (req,res){
  var posts=[{id:33,title:'Hellow world',content:'This is the content'},
  { id:120, title:'Sencond Post',content:'This is the content2'},
    {id:34,title:'Third Post',content:'This is the content3'}
];
  res.render('posts',{posts:posts});
});




app.listen(3000);
