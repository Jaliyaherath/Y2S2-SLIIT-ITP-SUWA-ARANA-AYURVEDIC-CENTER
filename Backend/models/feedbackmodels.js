const mongoose = require('mongoose');

const schemaData = mongoose.Schema(
  {
    name: String,
    
    email: String,
    gender: String,
    date: String,
    doctor_name: String,
    rate: String,
    feedback_type: String,
    feedback: String,
    satisfaction: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('feedback', schemaData);



