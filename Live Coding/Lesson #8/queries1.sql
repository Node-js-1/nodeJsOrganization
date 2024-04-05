-- Create the 'Students' table with relevant columns
CREATE TABLE Students (
    ID INT PRIMARY KEY,
    Name VARCHAR(50),
    Class VARCHAR(50),
    Score INT
);

-- Insert sample data into the 'Students' table
INSERT INTO Students (ID, Name, Class, Score) VALUES (1, 'Giorgi', 'Math', 85);
INSERT INTO Students (ID, Name, Class, Score) VALUES (2, 'Vako', 'Science', 90);
INSERT INTO Students (ID, Name, Class, Score) VALUES (3, 'Keti', 'Math', 95);
INSERT INTO Students (ID, Name, Class, Score) VALUES (4, 'Luka', 'History', 78);
INSERT INTO Students (ID, Name, Class, Score) VALUES (5, 'Mariam', 'Science', 88);

-- Exercise 3 Query: Find the average score of students in each class
SELECT Class, AVG(Score) AS AverageScore FROM Students GROUP BY Class;
 