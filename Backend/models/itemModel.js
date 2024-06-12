const mongoose = require('mongoose');

const schemaData = mongoose.Schema(
  {
    Inametem: String,
    image: String,
    categoryName: String,
    price: Number,
    description: String,
    Supplier: String,

    
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('item', schemaData);



