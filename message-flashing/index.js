const session = require('express-session')
const express=require('express') 
const flash=require('express-flash-messages') 
app=express() 
app.use(flash());
app.set("view engine", "ejs");
app.use(session({
	secret: 'secret'
}))
app.get('/', function(req, res){
  req.flash('notify', 'This is a test notification')
  res.render('index')
})

app.get('/redirect', function(req, res){
  req.flash('notify', 'Redirect successful!')
  res.redirect('/')
})

app.listen(3000,()=>{console.log('listening to 3000');})