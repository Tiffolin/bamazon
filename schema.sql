DROP DATABASE IF EXISTS bamazon;
CREATE database bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(100) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT NOT NULL,

  PRIMARY KEY (item_id)
);

USE bamazon;
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES
	(1, "Strawhat", "accessories", 30, 1), 
	(2, "devil fruit", "food", 66, 66), 
	(3, "canon", "weapons", 3, 25),
	(4, "hakama", "accessories", 20, 3), 
	(5, "cotton candy", "food", 1, 9), 
	(6, "sea king", "food", 90, 50),
    (7, "Thousand Sunny", "weapons", 99, 1),
    (8, "black loafers", "accessories", 60, 10), 
	(9, "den den moshi", "accessories", 70, 100),
    (10, "meat", "food", 5, 55);

    