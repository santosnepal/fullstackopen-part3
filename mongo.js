const mongoose = require('mongoose')
if(process.argv.length<3){
    console.log('please provide password as an argument')
    process.exit(1)
}

const password = process.argv[2]
const url = `mongodb+srv://suroz:${password}@cluster0.ttuc2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

mongoose.connect(url)
const phoneBookschema = new mongoose.Schema({
    name:String,
    number:String
})
const PhoneBook = mongoose.model('PhoneBook',phoneBookschema)
if(process.argv.length===3){
    PhoneBook.find({}).then(result=>{
        result.forEach((res)=>console.log(res))
        mongoose.connection.close()
    }).catch(error=>console.log(error.message))
    
}else {
    const phonebook = new PhoneBook({
        name:process.argv[3],
        number:process.argv[4]
    })
    
    phonebook.save().then(()=>{
        console.log(`Added ${phonebook.name} Number : ${phonebook.number} to phonebook `)
        mongoose.connection.close()
    })
}