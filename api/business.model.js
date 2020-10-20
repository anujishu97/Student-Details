const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Business = new Schema({
  fname: {
    type: String
  },
  email: {
    type: String
  },
  dob: {
    type: String
  },
  phone:{
    type:Number
  }
},{
    collection: 'students'
});

module.exports = mongoose.model('Business', Business);