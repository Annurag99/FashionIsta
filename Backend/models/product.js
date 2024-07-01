var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
  title: {
    type: String
  },
  image: {
    type: String
  },
  category: {
    type: String
  },
  subTitle: {
    type: String
  },
  price: {
    type: Number
  },
  other: {
    type: String
  }
});
var Model = mongoose.model('Product', productSchema);
module.exports = Model;