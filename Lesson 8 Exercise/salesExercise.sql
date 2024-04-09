CREATE TABLE Orders (
    ID INT PRIMARY KEY,
    CustomerName VARCHAR(20),
    Product VarChar(20),
    Quantity INT,
    Price INT
);


INSERT INTO Orders (ID, CustomerName, Product, Quantity, Price) VALUES (1, 'Vako', "T-Shirt", 2, 120);
INSERT INTO Orders (ID, CustomerName, Product, Quantity, Price) VALUES (2, 'Giorgi', "Trousers", 1, 64);
INSERT INTO Orders (ID, CustomerName, Product, Quantity, Price) VALUES (3, 'Luka', "Shoes", 3, 450);
INSERT INTO Orders (ID, CustomerName, Product, Quantity, Price) VALUES (4, 'Saba', "Jacket", 2, 146);

SELECT * FROM Orders;
SELECT ID, Product, Quantity * Price AS TotalSales FROM Orders;
SELECT AVG(Price) AS AveragePrice FROM Orders;