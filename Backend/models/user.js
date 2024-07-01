var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  address: {
    type: String
  },
  city: {
    type: String
  },
  state: {
    type: String
  },
  email: {
    type: String
  },
  gender: {
    type: String
  }
});
var Model = mongoose.model('User', userSchema);
module.exports = Model;
