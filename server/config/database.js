const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');
const database = async ()=>{
   try {
    await mongoose.connect(config.get('mongoURI'),{
        useCreateIndex:true,
        useNewUrlParser:true,
        useFindAndModify:false,
        useUnifiedTopology: true 
    })
    console.log("Succesfully connected to mongoDB");
   } catch (err) {
       console.log(err.message);
   }

}

module.exports = database