const mongoose = require("mongoose");

const connectDB = ()=>{
    mongoose.connect(process.env.URI).then(()=>{
console.log("server started success")
    })
}

module.exports = connectDB; 