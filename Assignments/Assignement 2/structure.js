// Step-by-Step Guide to Complete the Exercise
// Step 1: Setup - დარწმუნდით რომ node.js გიყენიათ მოწყობილობაზე

// Make sure Node.js is installed on your system.
// Navigate to the exercise directory containing src/main.js and the data folder.

// Step 2: Understand the File Structure - გადახედეთ დავალების სტრუქტურას (ფოტოსურათი საქაღალდეშია)

// src/main.js: Where you'll write your Node.js script.

// data/input.txt: The file containing the code or text to be read.
// data/output.txt: The file where the read data will be written (should be initially empty).


// Step 3: Writing the Script in src/main.js - ვიწყებთ კოდის წერას, ვაიმპორტებთ file system-ს

// Import the fs Module:

// At the beginning of main.js, require the fs (file system) module:

// const fs = require('fs');  



// Create Read and Write Streams: - ვქმნით წასაკითხ და დასაწერ სტრიმებს

// Use fs.createReadStream to create a stream for reading from input.txt.
// Use fs.createWriteStream to create a stream for writing to output.txt.

// const readable = fs.createReadStream('data/input.txt');
// const writable = fs.createWriteStream('data/output.txt');

// Handle the 'data' Event: - ვმართავთ მონაცემებს, უნდა მოვუსმინოთ data-ს და end -ს

// Listen to the 'data' event on the readable stream.
// Write each data chunk to the writable stream.

// readable.on('data', (chunk) => {
//   writable.write(chunk);
// });


// Handle the 'end' Event:

// Listen for the 'end' event to know when the reading is complete.
// Close the writable stream.

// readable.on('end', () => {
//   writable.end();
// });


// Step 4: Testing the Script  - გავტესტოთ დაწერილი კოდი
// Run the script using Node.js:


// node src/main.js
// Check data/output.txt to ensure it contains the same data as data/input.txt.
