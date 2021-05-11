const mongoose = require('mongoose');

const{Schema, model} = mongoose;

const userSchema = new Schema({

    userName: {type: String},
    email: {type: String},
    password: {type: String},
    

})

module.exports = model('User', userSchema);