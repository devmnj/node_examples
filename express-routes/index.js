const express= require('express')
const app=express()
//routes
app.use(require('./app/routes'))

app.listen(3000, () => console.log('server on!'));
