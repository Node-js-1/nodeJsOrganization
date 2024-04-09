const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/create-user", (req, res) => {
  res.send("username confirmed!");
});

app.delete("/delete-user/:userId", (req, res) => {
  res.send(`Name id: ${req.params.userId} has been removed!`);
});

app.listen(port, () => {
  console.log(`Server started on localhost:${port}`);
});
