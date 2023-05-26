const mongoose = require("mongoose");


const db = async () => {
    const URL = "mongodb+srv://Nayeem:8WQWMk-vvbr4adt@cluster0.qwxgjf9.mongodb.net/CRUD1"
    try{
        await mongoose.connect(URL,{useUnifiedTopology:true, useNewUrlParser:true })
        console.log('Database Connected!!')

    }catch(error){
        console.log("Error", error)
    }


  
}

module.exports = db;