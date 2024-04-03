## Assignement 6 - Personal Library Management System

Objective: Develop a Node.js application using Express.js to create a simple library management system. This exercise will focus on handling GET, POST, and DELETE HTTP methods to manage a collection of books.

Requirements:

Setup Node.js and Express:

Initialize a Node.js project.
Install Express.js and set up a basic server.
Implement GET Request for Listing Books:

Create a GET route at /books that responds with a list of books in JSON format.
Initially, you can use a hardcoded array of book objects.
Implement POST Request to Add a New Book:

Create a POST route at /add-book.
This route should accept book details (e.g., title, author) from a request body.
Add the new book to your books collection and respond with a success message.
Implement DELETE Request to Remove a Book:

Create a DELETE route at /delete-book/:bookId.
The route should remove a book from your collection based on the provided bookId.
Respond with a confirmation message of the book's deletion.
Frontend HTML Page:

Create a simple HTML page served at the root URL ('/') that includes:
A form for adding new books (POST request to /add-book).
A button to fetch and display the list of books (GET request to /books).
Test the Application:

Use a tool like Postman to test the POST and DELETE routes.
Access the root URL in a web browser to view and interact with the HTML page. 