const express = require('express');
const checkIfUserIsLoggedIn = require('../middlewares/auth');
const User = require('../models/user-model');

const router = express.Router();

router.get('/', (req, res) => res.render('home'));

router.get('/help-page', (req, res) => res.render('users/help-page'));

router.get('/welcome', checkIfUserIsLoggedIn, (req, res) => {
  res.render('users/welcome', { userInSession: req.session.currentUser });
});

router.get('/profile/edit', checkIfUserIsLoggedIn, (req, res) => {
  res.render('users/profile', { userInSession: req.session.currentUser });
});

router.post('/profile/edit', checkIfUserIsLoggedIn, (req, res, next) => {
  const { _id } = req.session.currentUser;
  const { username, email, nationality, age, cookLevel } = req.body;
  User.findByIdAndUpdate(_id, { username, email, nationality, age, cookLevel }, { new: true })
    .then(() => {
      res.redirect('/welcome');
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
