const mongoose = require('mongoose')
const express = require('express');
const bcryptjs = require('bcryptjs');

const saltRounds = 10;
// const flash = require('connect-flash');
const User = require('../models/user-model');
const { route } = require('./users');



const router = express.Router();

/* GET users listing. */
router.get('/signup',(req, res) => {
    res.render('users/signup')
});
  
router.post('/signup', (req, res, next) => {
    const { username, email, password } = req.body; 
    if(!username || !email || !password){
      res.render('users/signup', {errorMessage: 'All fields are mandatory. Please provide your username, email and password.'});
      return;
    }    
    const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    if(!regex.test(password)){
          res
          .status(500)
          .render('users/signup', {errorMessage: 'Password needs to have at least 6 chars and must contain at least one number, one lowercase and one uppercase letter.' });
          return;
    }
    
    bcryptjs
      .genSalt(saltRounds)
      .then(salt => bcryptjs.hash(password, salt))
      .then(passwordHash => User.create({username,email, passwordHash})
        .then(()=> {          
            res.redirect('/')
        })
        .catch((error)=> {
            
          if (error instanceof mongoose.Error.ValidationError) {

              res.status(500).render('users/signup', { errorMessage: error.message });
          } else if(error.code === 11000){
              res.status(500).render('users/signup', {
                  errorMessage: 'Username and email need to be unique. Either username or email is already used.'   
              });
          }else{
              next(error)
          }
        }));
   
})
  
router.get('/login',(req, res) => {
    res.render('users/login')
});
  
router.post('/login',(req,res,next) => {
      
    // console.log('SESSION =====>', req.session)
      const {email, password} = req.body;
      console.log('BODY =====>', req.body.email, req.body.password)
     
    if(email === '' || password === ''){
          res.render('users/login', {errorMessage: 'Username and email need to be unique. Either username or email is already used.'});
          return;
    }
    User.findOne({email}) // <== check if there's user with the provided email
       .then((user)=> {      // response from DB - doesn't matter if found or not
          if(!user){
                       // <== if there's no user with provided email, notify the user who is trying to login
             res.render('users/login', {errorMessage: 'Sorry but this username is not registered'});
                       
              
  
          }else if(bcryptjs.compareSync(password, user.passwordHash)){      // if there's a user, compare provided password  with the hashed password saved in the database
                
              
               // if the two passwords match, render the userProfile.hbs and
          //                   pass the user object to this view
              
              req.session.currentUser = user;
                console.log('login user', user)
                console.log('req.session', req.session.currentUser)
              res.redirect('/welcome')
          }else{
              // if the two passwords DON'T match, render the login form again
          // and send the error message to the user
              res.render('users/login', {errorMessage: 'Sorry but the password you enter is not correct. Try again!'})
              
          }
       })
       .catch(error => next(error))
  
});
   

router.post('/logout', (req,res)=>{
    console.log("estoy dentro de logout")
    console.log("req.session", req.session)
    req.session.destroy();
    res.redirect('/')
})
  


module.exports = router;