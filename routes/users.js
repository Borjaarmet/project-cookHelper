// const mongoose = require('mongoose');
const express = require('express');
// const bcryptjs = require('bcryptjs');

// const saltRounds = 10;
const User = require('../models/user-model');

const router = express.Router();

router.get('/', (req,res) => res.render('home'))

router.get('/welcome',(req, res) => {
  res.render('users/welcome',{ userInSession: req.session.currentUser })
});

router.get('/profile/edit',(req, res) => {
  const user = req.session.currentUser;
  res.render('users/profile', { userInSession: req.session.currentUser })
});

router.post('/profile/edit', (req, res, next) => {
  
  const { _id}= req.session.currentUser;
  const {username, email}= req.body;
  
  // console.log("the user is: ", req.session.currentUser);
  console.log("the id is: ", _id);
  console.log('data', username, email)

  User.findByIdAndUpdate( _id, {username, email}, {new:true})
  .then((updateUser)=> {
    console.log("the updated user is: ",updateUser)
    res.redirect('/welcome')
  })
  .catch((err)=> {
    next(err)
  })
})


module.exports = router;
