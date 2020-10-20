const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Signup = new Schema({
  username: {
    type: String
  },
  password: {
    type: String
  }
},{
    collection: 'registered'
});

module.exports = mongoose.model('Signup', Signup);