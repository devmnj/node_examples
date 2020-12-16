const express = require('express')
const session = require('express-session')
var app = express()
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))
app.get('/',(req,res)=>{
    res.send('Hello world')
})
app.listen(3000,()=>{console.log('listening to 3000');})