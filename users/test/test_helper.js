const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/users_test');
mongoose.connection
  .once('open', () => console.log('Good to go!'))
  //wait for mongo to 'open' then do something
  .on('error', (error) => {
    // wait for mongoose to see if there is an 'error' then do something
    console.warn('Warning', error);
  });
