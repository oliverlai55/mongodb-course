const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const app = express();

mongoose.Promise = global.Promise;
if (process.env.NODE_ENV !== 'test') {
  mongoose.connect('mongodb://localhost/muber');
}


app.use(bodyParser.json());
routes(app);

app.use((err, req, res, next) => {
// err: populated if the previous middleware throw error
// req: incoming request object
// res: outgoing response object
// next: A function to force it to go next middleware
  res.status(422).send({ error: err.message });
});

module.exports = app;
