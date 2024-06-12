const mongoose = require('mongoose');

const schemaData = mongoose.Schema(
  {
    price: Number,
    image: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('payment', schemaData);



