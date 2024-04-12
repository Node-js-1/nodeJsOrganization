CREATE TABLE Orders(
  ID INT PRIMARY KEY,
  CustomerName varchar(100),
  Product varchar(100),
  Quantity INT,
  Price INT
);

INSERT INTO Orders(ID, CustomerName, Product, Quantity, Price) VALUES (1, 'giorgi', 'M235 M2 Competition 2016', 4, 23000);
INSERT INTO Orders(ID, CustomerName, Product, Quantity, Price) VALUES (2, 'luka', 'CLK 55 AMG 600hp 2001', 6, 10000);
INSERT INTO Orders(ID, CustomerName, Product, Quantity, Price) VALUES (3, 'liza', 'E 63 AMG 2020', 2, 90000);
INSERT INTO Orders(ID, CustomerName, Product, Quantity, Price) VALUES (4, 'barbare', 'CLS 63 AMG cls63s 2015 ', 11, 30000);




SELECT ID, CustomerName, Product, Quantity, Price, Quantity * Price AS TotalSales
FROM Orders;
SELECT Product, AVG(Price) AS AveragePrice
FROM Orders
GROUP BY Product;
SELECT CustomerName, COUNT(ID) AS OrderCount
FROM Orders
GROUP BY CustomerName;