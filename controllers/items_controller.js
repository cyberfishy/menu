// Pull in required dependencies
var express = require('express');
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var menu = require('../models/items.js');

// Create the routes and associated logic
router.get('/', function(req, res) {
  item.selectAll(function(data) {
    var hbsObject = {
      item: data
    };
    // console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

router.post('/menu', function(req, res) {
  item.insertOne([
    'item_name'
  ], [
    req.body.item_name
  ], function(data) {
    res.redirect('/');
  });
});

router.put('/item/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;

//  menu.updateOne({
 //   'item_name'
//  }, condition, function(data) {
//    res.redirect('/');
 // });
});

// Export routes for server.js to use.
module.exports = router;
