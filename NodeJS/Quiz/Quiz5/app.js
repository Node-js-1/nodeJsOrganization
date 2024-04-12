const fs = require('fs');

const sorcFile = './second.txt';
const textFile = './text.txt';
const readStream = fs.createReadStream(sorcFile);
const writeStream = fs.createReadStream(textFile);


readStream.on('error', (error) => console.error('error: ', error));
writeStream.on('error', (error) => console.error('error: ', error));

readStream.pipe(writeStream);