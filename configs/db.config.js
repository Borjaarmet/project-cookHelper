const mongoose = require('mongoose');
require('dotenv').config();

mongoose
  .connect(process.env.MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log(`Connected to Mongo! Database name: ${process.env.MONGODB_URI}`);
  })
  .catch(error => {
    console.log('error connecting to mongoDB', error);
  });
