const express = require('express');
const mongoose = require('mongoose');

const Recipe= require('../models/recipe-model');

const router = express.Router();

router.get('/search',(req, res) => {
  res.render('users/search')
});

router.post('/search',(req, res, next) => {
  const {meat, fish, vegetables, pasta, dairy} = req.body;
  if(meat ==='' && fish ==='' && vegetables === '' && pasta ==='' && dairy ===''){
    console.log(' estoy dentro del if')
    res.render('users/search', {errorMessage: "selecciona algo!!!!!"})
    return;
  }
  console.log('data:',{meat,fish,vegetables,pasta,dairy})
  Recipe.find({$or:[{ingredientsList:meat}, {ingredientsList:fish},{ingredientsList:vegetables}, {ingredientsList:pasta}, {ingredientsList:dairy}]})
  .then((recipeFounded) => {
    console.log('recipe founded: ', recipeFounded)
    res.render('users/recipes', {recipeFounded})
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
