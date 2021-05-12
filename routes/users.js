const mongoose = require('mongoose');
const express = require('express');
const bcryptjs = require('bcryptjs');

const saltRounds = 10;
const User = require('../models/user-model');
// const Recipes = require('../models/recipe-model')

const router = express.Router();



router.get('/welcome',(req, res) => {
  res.render('users/welcome',{ userInSession: req.session.currentUser })
});

router.get('/profile',(req, res) => {
  res.render('users/profile', { userInSession: req.session.currentUser })
});



router.get('/search',(req, res) => {
  res.render('users/search')
});

router.get('/recipes',(req, res) => {
  res.render('users/recipes')
});




module.exports = router;
