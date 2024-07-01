var express = require('express');
var router = express.Router();
var Product = require('../models/Product');
var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;

router.get('/', function(req, res, next) {
    Product.find({}, function(err, products) {
      if (err) throw err;
    
      // object of all the products
      res.send(JSON.stringify(products));
    });
    
});

router.get('/:id', function (req, res) {
    Product.findById({ _id: req.params.id}, function(err, product) {
    if (err) throw err;
  
    // object of the product
    res.send(JSON.stringify(product));
  });
});

router.post('/', function (req, res) {
    
  var newProduct = Product({
      title: req.body.title,
      image: req.body.image,
      category: req.body.category,
      subTitle: req.body.subTitle,
      price: req.body.price,
      other: req.body.other
  });
  console.log(newProduct);
  
  // save the product
  newProduct.save(function(err, product) {
      console.log(err, product);
      
    if (err) throw err;
  
    res.send(JSON.stringify(req.body));
  });
});

router.put('/', function (req, res) {
    var id = mongoose.Types.ObjectId(req.body._id);
    Product.update( {_id: id}, 
        {
            title: req.body.title,
            image: req.body.image,
            category: req.body.category,
            subTitle: req.body.subTitle,
            price: req.body.price,
            other: req.body.other
        }, 
    function(err, product) {
    if (err) throw err;
  
    // we have the updated product returned to us
    res.send(product)
    console.log(product);
  });
});

router.delete('/:id', function (req, res) {
    Product.findByIdAndRemove(req.params.id, function(err) {
    if (err) throw err;
  
    // we have deleted the product
    res.send('Product deleted!');
  });
})

module.exports = router;
