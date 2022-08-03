const mongoose = require('mongoose')




 
const userSchema = new mongoose.Schema({
    name: String,
    email: {type: String, required: true, lowercase: true, unique: true},
    password: String,
    isAdmin: Boolean
  }, {
    timestamps: true
  });

  const User = mongoose.model('User', userSchema)

  module.exports = User
