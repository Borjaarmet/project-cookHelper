const express = require('express');
const mongoose = require('mongoose');

const Recipe= require('../models/recipe-model');

const router = express.Router();

router.get('/search',(req, res) => {
  res.render('users/search')
});

router.post('/search',(req, res, next) => {
  const {meat1,meat2,meat3,meat4, fish1,fish2,fish3,fish4, vegetables1,vegetables2,vegetables3,vegetables4,vegetables5,vegetables6,vegetables7,vegetables8, pasta1,pasta2,pasta3,pasta4, dairy1,dairy2,dairy3,dairy4,dairy5,dairy6,dairy7,dairy8,} = req.body;
  
  if(meat1 ==='' && meat2 ==='' && meat3 ==='' && meat4 ==='' && fish1 ==='' && fish2 ==='' && fish3 ==='' && fish4 ==='' && vegetables1 === ''&& vegetables2 === ''&& vegetables3 === ''&& vegetables4 === ''&& vegetables5 === ''&& vegetables6 === ''&& vegetables7 === ''&& vegetables8 === '' && pasta1 ===''&& pasta2 ===''&& pasta3 ===''&& pasta4 ==='' && dairy1 ==='' && dairy2 ==='' && dairy3 ==='' && dairy4 ==='' && dairy5 ==='' && dairy6 ==='' && dairy7 ==='' && dairy8 ===''){
    res.render('users/search', {errorMessage: "selecciona algo!!!!!"})
    return;
  }
  Recipe.find({$or:[{ingredientsList:meat1},{ingredientsList:meat2},{ingredientsList:meat3},{ingredientsList:meat4}, {ingredientsList:fish1},{ingredientsList:fish2},{ingredientsList:fish3},{ingredientsList:fish4},{ingredientsList:vegetables1},{ingredientsList:vegetables2},{ingredientsList:vegetables3},{ingredientsList:vegetables4},{ingredientsList:vegetables5},{ingredientsList:vegetables6},{ingredientsList:vegetables7},{ingredientsList:vegetables8}, {ingredientsList:pasta1},{ingredientsList:pasta2},{ingredientsList:pasta3},{ingredientsList:pasta4}, {ingredientsList:dairy1},{ingredientsList:dairy2},{ingredientsList:dairy3},{ingredientsList:dairy4},{ingredientsList:dairy5},{ingredientsList:dairy6},{ingredientsList:dairy7},{ingredientsList:dairy8},]})
  .then((recipesFounded) => {
    console.log('recipes founded: ', recipesFounded)
    
    res.render('users/recipes',{recipesFounded})
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
