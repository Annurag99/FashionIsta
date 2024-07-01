var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/:id', function (req, res) {
  User.findById({ _id: req.params.id}, function(err, user) {
    if (err) throw err;
  
    // object of the user
    res.send(JSON.stringify(user));
  });
});

router.post('/', function (req, res) {
  var newUser = User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    email: req.body.email,
    gender: req.body.gender
  });
  
  // save the user
  newUser.save(function(err, user) {
    if (err) throw err;
  
    res.send(JSON.stringify(req.body));
  });
});

router.put('/', function (req, res) {
  User.findByIdAndUpdate(req.body._id, 
    { 
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      address: req.body.address,
      city: req.body.city,
      state: req.body.state,
      email: req.body.email,
      gender: req.body.gender
    }, 
    function(err, user) {
    if (err) throw err;
  
    // we have the updated user returned to us
    res.send(user)
    console.log(user);
  });
});

router.delete('/:id', function (req, res) {
  User.findByIdAndRemove(req.params.id, function(err) {
    if (err) throw err;
  
    // we have deleted the user
    res.send('User deleted!');
  });
})

module.exports = router;
