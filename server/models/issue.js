const mongoose = require('mongoose');

// schema maps to a collection
const Schema = mongoose.Schema;

const issueSchema = new Schema({
  issueId: {
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  projectId: {
    type: String,
    required: true,
  },
  projectObjectId: {
    type: mongoose.Schema.Types.ObjectId,
    // required: true,
  },
  assignee: {
    type: mongoose.Schema.Types.ObjectId,
    // required: true,
    trim: true
  },
  reporter: {
    type: mongoose.Schema.Types.ObjectId,
    // required: true,
    trim: true
  },
  comments: {
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


module.exports = mongoose.model('Issue', issueSchema);