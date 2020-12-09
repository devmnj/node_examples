require('dotenv').config()
const express=require('express')
const app=express()
const mongoose=require('mongoose')

mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser:true})
const db= mongoose.connection
db.on('error',(error)=>console.log(error));
db.once('open',()=>console.log('Connected to DataBase'))
app.use(express.json())

const usersRouter=require('./routes/users')
app.use('/users',usersRouter)
// app.get('/',(req,res)=>{
// res.send('Hello world')
// })

const port = process.env.PORT || 3000;
app.listen(port,()=>console.log('Server Started'))