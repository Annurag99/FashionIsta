var express = require('express');
var router = express.Router();
var Cart = require('../models/Cart');

router.get('/', function(req, res, next) {
    Cart.find({}, function(err, carts) {
      if (err) throw err;
    
      // object of all the carts
      res.send(JSON.stringify(carts));
    });
    
});

router.get('/:id', function (req, res) {
  Cart.findById({ _id: req.params.id}, function(err, cart) {
    if (err) throw err;
  
    // object of the cart
    res.send(JSON.stringify(cart));
  });
});

router.post('/', function (req, res) {
  var newCart = Cart({
      category: req.body.category,
      items: req.body.items,
      subTotal: req.body.subTotal,
      total: req.body.total,
      other: req.body.other
  });
  
  // save the cart
  newCart.save(function(err, cart) {
    if (err) throw err;
  
    res.send(JSON.stringify(req.body));
  });
});

router.put('/', function (req, res) {
    Cart.findByIdAndUpdate(req.body._id, 
        {
            category: req.body.category,
            items: req.body.items,
            subTotal: req.body.subTotal,
            total: req.body.total,
            other: req.body.other
        }, 
    function(err, cart) {
    if (err) throw err;
  
    // we have the updated cart returned to us
    res.send(cart)
    console.log(cart);
  });
});

router.delete('/:id', function (req, res) {
    Cart.findByIdAndRemove(req.params.id, function(err) {
    if (err) throw err;
  
    // we have deleted the cart
    res.send('Cart deleted!');
  });
})

module.exports = router;
