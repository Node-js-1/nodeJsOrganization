## Exercise 4 

Objective:
To understand and practice using async/await in Node.js for basic asynchronous operations.

Task Description:
Write a Node.js script that simulates a simple asynchronous operation using setTimeout, which is a built-in method that executes a function after a specified number of milliseconds. The task is to create an async function that waits for a predetermined amount of time before logging a message to the console.

Steps:
Create a function that returns a Promise
The function, named wait, should use setTimeout to resolve the Promise after a specified number of milliseconds.
Use async/await to wait for the Promise
Write an async function named performTask that awaits the resolution of the wait function before logging a message to the console.