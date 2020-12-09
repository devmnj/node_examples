const mongoose=require('mongoose')

const usersSchema=new mongoose.Schema({
    uname:{
    type:String,
    require:true
    },
    role:{
    type:String,
    required:true
    }
})

module.exports =mongoose.model('User',usersSchema)