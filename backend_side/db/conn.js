const mongoose = require("mongoose");

const DB = process.env.DB_URL_LOCAL;

mongoose.connect(DB,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>console.log("connection is successfully done")).catch((error)=>console.log("error occured" + error.message))