const mongoose = require('mongoose');

// schema maps to a collection
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  roles: {
    type: Array,
    required: true,
  },
  groups: {
    type: Array,
  },
  createdAt:{
    type: Date,
    required: true
  }, 
  updatedAt:{
    type: Date,
    required: true
  }
});


module.exports = mongoose.model('User', userSchema);