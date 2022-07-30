const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    role: String,
    name: String,
    password: String,
    //task
})

const User = mongoose.model('User', userSchema)

module.exports = User;