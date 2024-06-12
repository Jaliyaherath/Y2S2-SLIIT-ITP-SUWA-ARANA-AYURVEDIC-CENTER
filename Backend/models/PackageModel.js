const mongoose = require('mongoose');

const packageSchema = new mongoose.Schema({
  packageName: {
    type: String,
    required: true,
  },
  doctorName: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
    default: 'Not Verified'
  },
});

module.exports = mongoose.model('Package', packageSchema);

