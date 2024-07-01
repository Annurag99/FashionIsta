var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Product = require('./Product');

var cartSchema = new Schema({
  category: {
    type: String
  },
  items: {
    type: [
      {
        id: mongoose.Schema.Types.ObjectId,
        count: Number
      }
    ],
    ref: 'Product'
  },
  subTotal: {
    type: Number
  },
  total: {
    type: Number
  },
  other: {
    type: String
  }
});
var Model = mongoose.model('Cart', cartSchema);
module.exports = Model;

