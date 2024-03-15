const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: String,
    email: {type:String,unique:true},
    password: {type:String,select:true},
    createdAt:{type:Date,default:Date.now}
})

const User = mongoose.model("User", schema)

module.exports = User;