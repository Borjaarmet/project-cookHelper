const mongoose = require('mongoose');
const express = require('express');
const bcryptjs = require('bcryptjs');

const saltRounds = 10;
const User = require('../models/user-model');

const router = express.Router();

router.get('/', (req,res) => res.render('home'))

router.get('/welcome',(req, res) => {
  res.render('users/welcome',{ userInSession: req.session.currentUser })
});

router.get('/profile/edit',(req, res) => {
  res.render('users/profile', { userInSession: req.session.currentUser })
});

router.post('/profile/edit', (req, res, next) => {
  // const user = req.session.currentUser;
  // const {username, email} = req.body
  User.findOneAndUpdate( req.session.currentUser,{new:true})
  .then((updateUser)=> {
    console.log("the update user is: ",updateUser)
    res.render('users/welcome', updateUser)
  })
  .catch((err)=> {
    next(err)
  })
})


module.exports = router;
