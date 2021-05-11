const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

const users = require('./routes/users');
const index = require('./routes/index');


mongoose.connect('mongodb://localhost:27017/project-CookHelper', 
{
  useCreateIndex: true,
  useNewUrlParser: true, 
  useUnifiedTopology: true
})
.then( x => {
  console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
})
.catch((error)=>{
  console.log('error connecting to mongoDB', error)
})

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use('/', users)



app.use('/', index);



// catch 404 and forward to error handler
app.use((req, res, next) =>{
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
