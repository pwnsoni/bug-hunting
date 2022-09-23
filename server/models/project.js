const mongoose = require('mongoose');

// schema maps to a collection
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  projectName: {
    type: String,
    required: true,
    unique: true
  },
  projectId: {
    type: String,
    // required: true,
    unique: true,
    trim: true
  },
  admin: {
    type: mongoose.Schema.Types.ObjectId,
    // required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
  },
  issuesCounter: {
    type: Number,
    required: true
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


module.exports = mongoose.model('Project', projectSchema);