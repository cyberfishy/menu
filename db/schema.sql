-- Create the menu_db database --
CREATE DATABASE menu_db;
USE menu_db;

-- Create a item table with the required fields --
CREATE TABLE item
(
	id int NOT NULL AUTO_INCREMENT,
	item_name varchar(255) NOT NULL,
	item_desc varchar(255) NOT NULL,
	item_price int(2) NOT NULL,
	image varchar(255) NOT NULL,
  	ts TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  	dt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  	PRIMARY KEY(id)
);
