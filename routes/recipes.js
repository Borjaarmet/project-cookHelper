const express = require('express');
const mongoose = require('mongoose');

const Recipe= require('../models/recipe-model');

const router = express.Router();

router.get('/search',(req, res) => {
  res.render('users/search')
});

router.post('/search',(req, res, next) => {
  const { ingredientsList} = req.body;
  console.log(req.body)
  Recipe.find(ingredientsList)
  .then((ingredient) => {
    console.log('list recipes with: ', ingredient)
    res.render('users/recipes', {ingredient})
  })
  .catch((err) => {
    next(err)
  })
  
});

module.exports = router;
