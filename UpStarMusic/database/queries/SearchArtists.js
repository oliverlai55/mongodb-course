const Artist = require('../models/artist');

/**
 * Searches through the Artist collection
 * @param {object} criteria An object with a name, age, and yearsActive
 * @param {string} sortProperty The property to sort the results by
 * @param {integer} offset How many records to skip in the result set
 * @param {integer} limit How many records to return in the result set
 * @return {promise} A promise that resolves with the artists, count, offset, and limit
 */
module.exports = (criteria, sortProperty, offset = 0, limit = 20) => {
  //write query that will follow, sort, offset, limit options only

// ES5
  // const sortOrder = {};
  // sortOrder[sortProperty] = 1;
  //
  // Artist.find({})
  //   .sort({ sortOrder })

// ES6 Interpolated Key
// At run time, look at whatever sortProperty is, and give it a value of 1
  console.log(criteria);
  const query = Artist.find({})
    .sort({ [sortProperty]: 1 })
    .skip(offset)
    .limit(limit);

  return Promise.all([query, Artist.count()])
    .then((results) => {
      return {
        all: results[0],
        count: results[1],
        offset: offset,
        limit: limit
      };
    });
};

// results[0] is query, and [1] is ARtist.count()
