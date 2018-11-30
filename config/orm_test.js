// Import the ORM and connection objects
var orm = require ('./orm.js');

// Import the connection file directly, in order to terminate the connection at the end of the test run
var connection = require ('./connection.js');

// Select all entries from the database
orm.selectAll('item', function (data) {
	console.log('orm.selectAll test...\n\n');

	console.log('__________Item Menu__________\n');

	for (var i = 0; i < data.length; i++) {
		console.log('Item ID = ' + data[i].id);
		console.log('Item Name = ' + data[i].item_name);
		console.log('Item Description = ' + data[i].item_desc);

		console.log('+++++++++++++++++++++++++++++++++++++++');
	}
});

// Insert a single entry into the database
orm.insertOne('item', 
	         ['item_name', 'item_desc', 'item_price', 'image'], 
	         ['Success Story Menu is created'], 
	         function (data) {
	console.log('\n\norm.insertOne test...\n\n');

	console.log('Inserted new row with ID = ' + data.insertId + '\n\n');
});

// Update a single entry in the database
orm.updateOne('item_name', 'item_desc', 'item_price', function (data) {
	console.log('\n\norm.updateOne test...\n\n');

	console.log('Result: ' + data.message);
});

connection.end();
