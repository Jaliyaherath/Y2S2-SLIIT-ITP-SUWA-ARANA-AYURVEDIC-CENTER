const mongoose = require('mongoose');

const schemaData = mongoose.Schema(
  {
    name: String,
    packageName: String, 
    doctorName: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Appoiment', schemaData);



