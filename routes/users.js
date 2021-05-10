const express = require('express');

const router = express.Router();


/* GET users listing. */
router.get('/users/signup',(req, res) => {
  res.render('users/signup')
});

router.get('/users/login',(req, res) => {
  res.render('users/login')
});

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
