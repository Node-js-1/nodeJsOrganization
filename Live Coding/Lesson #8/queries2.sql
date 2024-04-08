-- Create the 'Students' table
CREATE TABLE Students (
    ID INT PRIMARY KEY,
    Name VARCHAR(50),
    Age INT,
    Score INT
);

-- Insert sample data into the table
INSERT INTO Students (ID, Name, Age, Score) VALUES (1, 'Keti', 22, 85);
INSERT INTO Students (ID, Name, Age, Score) VALUES (2, 'Vako', 16, 90);
INSERT INTO Students (ID, Name, Age, Score) VALUES (3, 'Giorgi', 18, 75);

-- SQL Query to retrieve all data
SELECT * FROM Students;

 