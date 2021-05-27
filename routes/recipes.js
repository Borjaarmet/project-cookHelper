const express = require('express');
const checkIfUserIsLoggedIn = require('../middlewares/auth');
const Recipe = require('../models/recipe-model');
const User = require('../models/user-model');

const router = express.Router();

router.get('/search', checkIfUserIsLoggedIn, (req, res) => {
  res.render('users/search', { userInSession: req.session.currentUser });
});

router.post('/search', checkIfUserIsLoggedIn, (req, res, next) => {
  const {
    meat1,
    meat2,
    meat3,
    meat4,
    meat5,
    meat6,
    fish1,
    fish2,
    fish3,
    fish4,
    vegetables1,
    vegetables2,
    vegetables3,
    vegetables4,
    vegetables5,
    vegetables6,
    vegetables7,
    vegetables8,
    vegetables9,
    vegetables10,
    pasta1,
    pasta2,
    pasta3,
    pasta4,
    pasta5,
    pasta6,
    dairy1,
    dairy2,
    dairy3,
    dairy4,
    dairy5,
    dairy6,
    dairy7,
    dairy8,
  } = req.body;
  if (
    meat1 === '' &&
    meat2 === '' &&
    meat3 === '' &&
    meat4 === '' &&
    meat5 === '' &&
    meat6 === '' &&
    fish1 === '' &&
    fish2 === '' &&
    fish3 === '' &&
    fish4 === '' &&
    vegetables1 === '' &&
    vegetables2 === '' &&
    vegetables3 === '' &&
    vegetables4 === '' &&
    vegetables5 === '' &&
    vegetables6 === '' &&
    vegetables7 === '' &&
    vegetables8 === '' &&
    vegetables9 === '' &&
    vegetables10 === '' &&
    pasta1 === '' &&
    pasta2 === '' &&
    pasta3 === '' &&
    pasta4 === '' &&
    pasta5 === '' &&
    pasta6 === '' &&
    dairy1 === '' &&
    dairy2 === '' &&
    dairy3 === '' &&
    dairy4 === '' &&
    dairy5 === '' &&
    dairy6 === '' &&
    dairy7 === '' &&
    dairy8 === ''
  ) {
    res.render('users/recipes', {
      errorMessage: 'Sorry you have to fill in at least one of the fields with an ingredient',
    });
  }
  Recipe.find({
    $or: [
      { ingredientsList: meat1 },
      { ingredientsList: meat2 },
      { ingredientsList: meat3 },
      { ingredientsList: meat4 },
      { ingredientsList: meat5 },
      { ingredientsList: meat6 },
      { ingredientsList: fish1 },
      { ingredientsList: fish2 },
      { ingredientsList: fish3 },
      { ingredientsList: fish4 },
      { ingredientsList: vegetables1 },
      { ingredientsList: vegetables2 },
      { ingredientsList: vegetables3 },
      { ingredientsList: vegetables4 },
      { ingredientsList: vegetables5 },
      { ingredientsList: vegetables6 },
      { ingredientsList: vegetables7 },
      { ingredientsList: vegetables8 },
      { ingredientsList: pasta1 },
      { ingredientsList: pasta2 },
      { ingredientsList: pasta3 },
      { ingredientsList: pasta4 },
      { ingredientsList: dairy1 },
      { ingredientsList: dairy2 },
      { ingredientsList: dairy3 },
      { ingredientsList: dairy4 },
      { ingredientsList: dairy5 },
      { ingredientsList: dairy6 },
      { ingredientsList: dairy7 },
      { ingredientsList: dairy8 },
    ],
  })
    .then(recipesFounded => {
      res.render('users/recipes', { recipesFounded });
    })
    .catch(err => {
      next(err);
      res.render('users/recipes', { errorMessage: 'Sorry but we haven´t found any recipe with this ingredients...' });
    });
});

router.get('/recipes/:id/details', checkIfUserIsLoggedIn, (req, res, next) => {
  Recipe.findById(req.params.id)
    .then(recipe => {
      res.render('users/recipes-info', { recipe });
    })
    .catch(err => {
      next(err);
    });
});

router.post('/recipes/:id/details', checkIfUserIsLoggedIn, (req, res, next) => {
  const user = req.session.currentUser;
  const { id } = req.params;
  // eslint-disable-next-line no-underscore-dangle
  User.findById(user._id)
    // eslint-disable-next-line no-shadow
    .then(user => {
      user.favouriteRecipes.push(id);
      return user.save();
    })
    .then(() => res.redirect('/favourites'))
    .catch(err => {
      next(err);
    });
});

router.get('/favourites', checkIfUserIsLoggedIn, (req, res, next) => {
  const user = req.session.currentUser;
  User.findById(user)
    .populate('favouriteRecipes')

    .then(userFounded => {
      res.render('users/favourites', { favourites: userFounded.favouriteRecipes });
    })
    .catch(err => {
      next(err);
    });
});

router.post('/favourites/:id', checkIfUserIsLoggedIn, (req, res, next) => {
  const user = req.session.currentUser;
  const { id } = req.params;
  // eslint-disable-next-line no-underscore-dangle
  User.findById(user._id)
    // eslint-disable-next-line no-shadow
    .then(user => {
      user.favouriteRecipes.splice(id, 1);
      return user.save();
    })
    .then(() => res.redirect('/favourites'))
    .catch(err => {
      next(err);
    });
});

module.exports = router;
