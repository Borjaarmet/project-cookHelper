const express = require('express');
const mongoose = require('mongoose');

const Recipe= require('../models/recipe-model');

const router = express.Router();

router.get('/search',(req, res) => {
  res.render('users/search')
});

router.post('/search',(req, res, next) => {
  Recipe.find({})
  .then((allrecipes) => {
    res.render('users/recipes', {allrecipes})
  })
  .catch((err) => {
    next(err)
  })
  
});

router.get('/recipes/:id/details', (req,res,next) => {
  // const {recipeName,difficulty,TimeToCook,ingredientsList,Steps} = req.body;
  Recipe.findById(req.params.id)
  .then((recipe) => {
    console.log('recipe founded: ', {recipe})
    res.render('users/recipes-info', {recipe})
  })
  .catch((err) => {
    next(err)
  })
})

module.exports = router;
