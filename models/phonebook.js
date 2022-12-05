const mongoose = require('mongoose')
const uniquevalidator = require('mongoose-unique-validator')
const url = 'mongodb+srv://suroz:fullstack2020@cluster0.ttuc2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
console.log(`trying to hookup with ${url}`)
mongoose.connect(url)
    .then(()=>{
        console.log('MongoDB Connected')
    })
    .catch((err)=>{
        console.log(`Couldn't hookup with mongo db due to ${err.message}`)
    })
const phoneBookschema = new mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required:true
    },
    number:{
        type:String,
        minlength: 8,
        required:true
    }
})
phoneBookschema.plugin(uniquevalidator)

module.exports = mongoose.model('PhoneBook',phoneBookschema)