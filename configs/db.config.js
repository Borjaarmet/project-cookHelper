const mongoose = require('mongoose');

mongoose
.connect('mongodb://localhost:27017/project-CookHelper', 
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