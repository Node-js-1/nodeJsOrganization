// const express = require('express');
// const app = express();
// const fs = require('fs')
// const port = 3000

// let books = [
    // {id: 1, title: "animalFarm", autor: "george"},
    // {id:2, title: "peter pen", autor: "james Matthew barrie"},
    // {id:3, title: "Words of Radiance", autor: "Brandon Sanderson"},
    // {id:4, title: "Harry Potter and the Deathly Hallows", autor: "J.K. Rowling"},
    // {id:5, title: "Crooked Kingdom", autor: "Leigh Bardugo"},
    // {id:6, title: "A Court of Mist and Fury", autor: "Sarah J. Maas"},
    // {id:7, title: "	The House of Hades", autor: "Rick Riordan"},
// ]

// app.use(express.json())
// app.use(express.static('public'))

// app.get('/books', (req, res) => {
//     res.json(books)
//     // res.sendFile(__dirname + '/public/index.html')
// })

// app.post('/add-book', (req, res) => {
//     res.books
// })

// app.listen(port, () => {
//     console.log(`Server is running on ${port}`);
// })







const express = require('express')
const app = express();
const port = 3000; 

let books = [
    {id: 1, title: "animalFarm", autor: "george"},
    {id:2, title: "peter pen", autor: "james Matthew barrie"},
    {id:3, title: "Words of Radiance", autor: "Brandon Sanderson"},
    {id:4, title: "Harry Potter and the Deathly Hallows", autor: "J.K. Rowling"},
    {id:5, title: "Crooked Kingdom", autor: "Leigh Bardugo"},
    {id:6, title: "A Court of Mist and Fury", autor: "Sarah J. Maas"},
    {id:7, title: "	The House of Hades", autor: "Rick Riordan"},
    {id:8, title: "Worwds of Radiance", autor: "Brandon Sanderson"},];


app.use(express.json());
app.use(express.static('public'));

app.get('/books', (req,res) => {
    res.json(books);
});

app.post('/add-book', (req,res) => {
    const {title,author} =req.body;
    console.log(title);
    const newBook = {
        id:books.length + 1 ,
        title, 
        author
    };  
    books.push(newBook);
    res.send('Book added successfully');
}); 


app.delete ('/delete-book/:bookId', (req,res) => {
    const {bookId} = req.params;
    books = books.filter(book => book.id !== parseInt(bookId));
    res.send('Book deleted successfully')
});


app.listen(port, () => {
    console.log (`My apllication listening at http://localhost:${port}`);
});