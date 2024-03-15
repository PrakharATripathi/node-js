const mongoose = require('mongoose');


const connectDB = () => {
    mongoose.connect(process.env.MONGO_URL, { dbName: "BackendApi" })
        .then(() => console.log("database connected "))
        .catch(() => console.log("error"))

} 

module.exports = connectDB;