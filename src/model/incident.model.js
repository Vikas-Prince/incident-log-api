const mongoose = require('mongoose');

const incidentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Incident title is required'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'Incident description is required'],
  },
  severity: {
    type: String,
    required: true,
    enum: ['low', 'medium', 'high', 'critical'],
  },
  reportedBy: {
    type: String,
    required: [true, 'Reporter name is required'],
  },
  status: {
    type: String,
    enum: ['open', 'investigating', 'resolved'],
    default: 'open',
  },
  timestamp: {
    type: Date,
    default: Date.now,
  }
}, {
  timestamps: true 
});

module.exports = mongoose.model('Incident', incidentSchema);
