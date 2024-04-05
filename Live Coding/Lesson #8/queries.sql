-- Create 'Students' table
CREATE TABLE Students (
    ID INT PRIMARY KEY,
    Name VARCHAR(50),
    ClassID INT
);

-- Create 'Classes' table
CREATE TABLE Classes (
    ID INT PRIMARY KEY,
    ClassName VARCHAR(50)
);

-- Insert sample data into 'Students' table
INSERT INTO Students (ID, Name, ClassID) VALUES (1, 'Keti', 1);
INSERT INTO Students (ID, Name, ClassID) VALUES (2, 'Vako', 2);
INSERT INTO Students (ID, Name, ClassID) VALUES (3, 'Giorgi', 1);

-- Insert sample data into 'Classes' table
INSERT INTO Classes (ID, ClassName) VALUES (1, 'Mathematics');
INSERT INTO Classes (ID, ClassName) VALUES (2, 'Science');

-- Exercise 4 Query: Retrieve student names with their class names
SELECT Students.Name, Classes.ClassName 
FROM Students 
INNER JOIN Classes ON Students.ClassID = Classes.ID;
 