const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  links: {
    type: String
  }
});

const workSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  duration: {
    type: String
  },
  description: {
    type: String
  }
});

const profileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  education: {
    type: String,
    required: true
  },
  skills: [{
    type: String
  }],
  projects: [projectSchema],
  work: [workSchema],
  links: {
    github: String,
    linkedin: String,
    portfolio: String
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Profile', profileSchema);
