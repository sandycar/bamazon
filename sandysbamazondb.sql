CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(

   id INT NOT NULL AUTO_INCREMENT,
   product_name VARCHAR(255) NOT NULL,
   department_name VARCHAR(255) NOT NULL,
   price INT NOT NULL,
   stock_quantity INT NOT NULL,
   PRIMARY KEY (id)
);

INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES 
('Gibson', 'guitars', 120, 5), ('Les Paul', 'guitars', 150, 3), 
('Marshall', 'amps', 310, 2), ('Fender', 'amps', 290, 7),
('Ludwig', 'drums', 300, 5), ('Yamaha', 'drums', 240, 9),
('Korg', 'keyboards', 310, 2), ('Roland', 'keyboards', 290, 7),
('Bose', 'PA systems', 310, 2), ('JBL', 'PA systems', 290, 7)