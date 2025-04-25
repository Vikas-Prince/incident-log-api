const Joi = require('joi');

const incidentSchema = Joi.object({
  title: Joi.string().min(3).max(100).required(),
  description: Joi.string().min(10).required(),
  severity: Joi.string().valid('low', 'medium', 'high', 'critical').required(),
  reportedBy: Joi.string().min(3).required(),
  status: Joi.string().valid('open', 'investigating', 'resolved').optional(),
  timestamp: Joi.date().optional(),
});

module.exports = { incidentSchema };
