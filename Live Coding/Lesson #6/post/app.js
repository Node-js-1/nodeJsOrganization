const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));



app.get('/', (req,res) => {
    res.sendFile(__dirname  + '/public/index.html')
});

app.post('/', (req, res) => {
    res.send(`Hello, ${req.body.name}! Your POST request has been received.`);
});

app.listen(3000, () => {
    console.log('Server is runing on 3000');

});


app.delete('/user/:userId', (req,res) => {
    const userId= req.params.userId; 
    res.send(`User with ID ${userId} has been deleted.`);
});