const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/create-user', (req, res) => {
    const username = req.body.username;
    res.send(`User ${username} confirmed`);
});

app.delete('/delete-user/:userId', (req, res) => {
    const userId = req.params.userId;
    res.send(`User with ID ${userId} has been removed`);
});

app.listen(port, () => {
    console.log(`Server started on localhost:${port}`);
});
