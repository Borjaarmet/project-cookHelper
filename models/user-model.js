const mongoose = require('mongoose');
const recipeModel = require('./recipe-model');

const{Schema, model} = mongoose;

const userSchema = new Schema({

    username: {
        type: String,
        trim: true,
        required: [true,'Username is required' ],
        unique: true
    },
    email: {
        type: String,
        required: [true, 'email is required'],
        match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.'],
        unique: true,
        lowercase: true,
        trim: true

    },
    nationality: {type:String},
    age: {type: Number},
    cookLevel: {type:String},

    // eslint-disable-next-line no-underscore-dangle
    favouriteRecipes:[{ type: Schema.Types.ObjectId, ref: 'Recipe'}],
    passwordHash: {
        type: String,
        required: [true, 'Password is required'],
       
    }
    

})

module.exports = model('User', userSchema);