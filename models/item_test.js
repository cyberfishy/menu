// Import the burger model to gain access to the database functions
var burger = require('./burger.js');

// Import the connection file directly, in order to terminate the connection at the end of the test run
var connection = require('../config/connection.js');

// Select all entries from the database
burger.selectAll(function (data) {
	console.log('burger.selectAll test...\n\n');

	console.log('__________Burger Menu__________\n');

	for (var i = 0; i < data.length; i++) {
		console.log('Item ID = ' + data[i].id);
		console.log('Item Name = ' + data[i].item_name);
		console.log('Item Description = ' + data[i].item_desc);
		console.log('Item Price = ' + data[i].item_price);
		console.log('Image = ' + data[i].image);

		console.log('+++++++++++++++++++++++++++++++++++++++');
	}
});

// Insert a single entry into the database
item.insertOne(['item_name', 'item_description', 'item_price'], 
	         	 ['Menu Item', 'Item Description', 'Price'], 
	    		 function (data) {
					console.log('\n\nitem.insertOne test...\n\n');

					console.log('Inserted new row with ID = ' + data.insertId + '\n\n');
				 }
);

// Update a single entry in the database
item.updateOne({item_name}, 'id = 10', function (data) {
	console.log('\n\nitem_name.updateOne test...\n\n');

	console.log('Result: ' + data.message);
});

connection.end();
