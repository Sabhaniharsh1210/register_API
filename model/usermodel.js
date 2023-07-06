const mongoose = require('mongoose');

const user_scheema = new mongoose.Schema({
    name: {type:String},
    email:{type:String},
    password:{type:String}
  });

  const register = mongoose.model('user', user_scheema);

  module.exports = register ;