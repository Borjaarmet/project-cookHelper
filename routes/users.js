const express = require('express');
const User = require('../models/user-model');

const router = express.Router();


/* GET users listing. */
router.get('/users/signup',(req, res) => {
  res.render('users/signup')
});

router.post('/users/signup', (req, res, next) => {
  const { userName, email, password } = req.body;
 
 User.create({ userName, email, password })
    .then((newUser) => {
      console.log('newly created user is: ',newUser)
      res.redirect('/users/welcome')
    })
    .catch(error => {
      next(error)
    });
})

router.get('/users/login',(req, res) => {
  res.render('users/login')
});

router.post('/users/login',(req,res,next) => {
  const {email, password} = req.body;
  User.findOne({email})
  .then((user) => {
    console.log('user founded: ',user)
    res.redirect('/users/welcome')
  })
  .catch((error) => {
    console.log(error)
  })

})

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
