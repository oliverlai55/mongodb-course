const assert = require('assert');
const User = require('../src/user');

describe('Reading users out of the database', () => {
  let joe;

  beforeEach((done) => {
    //we don't use var because we want joe to be global so inside it, can read it as well
    joe = new User({ name: 'Joe' });
    joe.save()
      .then(() => done());
  });

  it('finds all users with a name of Joe', (done) => {
    User.find({ name: 'Joe' })
      .then((users) => {
        assert(users[0]._id.toString() === joe._id.toString());
        done();
      });
  });
});
