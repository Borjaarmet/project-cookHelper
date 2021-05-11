const mongoose = require('mongoose');
const express = require('express');
const bcryptjs = require('bcryptjs');

const saltRounds = 10;
const User = require('../models/user.model');
// const Recipes = require('../models/recipe-model')

const router = express.Router();



router.get('/users/welcome',(req, res) => {
  res.render('users/welcome')
});

router.get('/users/profile',(req, res) => {
  res.render('users/profile')
});

router.get('/users/search',(req, res) => {
  res.render('users/search')
});

router.get('/users/recipes',(req, res) => {
  res.render('users/recipes')
});




module.exports = router;
