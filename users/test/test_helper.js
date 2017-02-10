const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// global.promise references to the ES6 Implementation of Promise

before((done) => {
//Only executed one time in the entire test suite
  mongoose.connect('mongodb://localhost/users_test');
  mongoose.connection
    .once('open', () => { done(); })
    //wait for mongo to 'open' then do something
    .on('error', (error) => {
      // wait for mongoose to see if there is an 'error' then do something
      console.warn('Warning', error);
    });
});


beforeEach((done) => {
  mongoose.connection.collections.users.drop(() => {
    // Ready to run the next test
    done();
    // this tells mocha that we are done, and can proceed with mocha
  });
});
