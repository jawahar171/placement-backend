const mongoose = require("mongoose");
const dotenv = require("dotenv");


dotenv.config();


mongoose.connect(process.env.MONGO_URI)
    .then(()=>console.log('connected to MongoDB...'))
    .catch(()=>console.log('unable to connect...',err));