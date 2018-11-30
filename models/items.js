// Import the ORM to implement functions that will interact with the database
var orm = require('../config/orm.js');

// Create the menu item object
var menu = {
  // Select all items table entries
  selectAll: function(cb) {
    orm.selectAll('item', function(res) {
      cb(res);
    });
  },

  // The variables cols and vals are arrays
  insertOne: function(cols, vals, cb) {
    orm.insertOne('item', cols, vals, function(res) {
      cb(res);
    });
  },

  // The objColVals is an object specifying columns as object keys with associated values
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne('item', objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (items_Controller.js).
module.exports = item;
