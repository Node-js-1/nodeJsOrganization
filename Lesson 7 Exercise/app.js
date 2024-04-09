const express = require("express");

const app = express();

const port = 5000;

let books = [
  { id: 1, title: "animalFarm", author: "george" },
  { id: 2, title: "pitterpan", author: "someone" },
  { id: 3, title: "programming", author: "programmer" },
];

app.use(express.json());
app.use(express.static("index.html"));

app.get("/books", (req, res) => {
  res.json(books);
});

app.post("/add-book", (req, res) => {
  const { title, author } = req.body;
  const newBook = {
    id: books.length + 1,
    title,
    author,
  };

  books.push(newBook);
  res.send("The book added successfully!");
});

app.delete("/delete-book/:bookId", (req, res) => {
  const { bookId } = req.params;
  books = books.filter((book) => book.id !== parseInt(bookId));
  res.send("Book deleted successfully!");
});

app.listen(port, () => {
  console.log("Server is running on " + port);
});
