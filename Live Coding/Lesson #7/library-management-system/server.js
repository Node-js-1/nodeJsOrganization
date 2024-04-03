const express = require('express')
const app = express();
const port = 3000; 

let books = [
    {id:1, title:"1984", author:"George Orwell"},
];

app.use(express.json());
app.use(express.static('public'));

app.get('/books', (req,res) => {
    res.json(books);
});

app.post('/add-book', (req,res) => {
    const {title,author} =req.body;
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
    console.log ('My apllication listening at http://localhost:${port}');
});