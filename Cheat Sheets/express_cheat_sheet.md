
# Express.js Cheat Sheet

## Basic Server Setup
```javascript
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

## Routing

// GET request
app.get('/route', (req, res) => {
  res.send('GET request to the route');
});

// POST request
app.post('/route', (req, res) => {
  res.send('POST request to the route');
});

// PUT request
app.put('/route/:id', (req, res) => {
  res.send(`Update resource with ID ${req.params.id}`);
});

// DELETE request
app.delete('/route/:id', (req, res) => {
  res.send(`Delete resource with ID ${req.params.id}`);
});

## Middleware

// Application-level middleware
app.use((req, res, next) => {
  console.log('Request Type:', req.method);
  next();
});

// Router-level middleware
const router = express.Router();
router.use((req, res, next) => {
  // Perform some operations
  next();
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

## Static files
app.use(express.static('public'));



### Asynchronous JavaScript Cheat Sheet

## Callbacks

fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
Promises
javascript
Copy code
let myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation
  if (/* success condition */) {
    resolve('Success!');
  } else {
    reject('Error!');
  }
});

myPromise.then((message) => {
  console.log(message);
}).catch((message) => {
  console.log(message);
});
Async/Await
javascript
Copy code
async function fetchData() {
  try {
    const data = await getData();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
Promise Chaining
javascript
Copy code
doSomething()
  .then(result => doSomethingElse(result))
  .then(newResult => doThirdThing(newResult))
  .catch(failureCallback);
Error Handling
javascript
Copy code
async function example() {
  try {
    const result = await someAsyncOperation();
  } catch (error) {
    // Handle errors
  }
} 