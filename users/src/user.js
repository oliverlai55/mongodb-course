const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String
});

const User = mongoose.model('user', UserSchema);
//creates collection and follows specific schema

module.exports = User;
//Only export the User class/model
