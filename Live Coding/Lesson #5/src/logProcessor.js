const fs = require('fs')
const {Transform} = require('stream');

const readStream = fs.createReadStream('logs.txt');
const writeStream = fs.createWriteStream('filtered-logs.txt');

const filterStream = new Transform({

    transform(chunk,encoding,callback) {
        //logic 
        callback(null,chunk);
    }
});

readStream.on('error', (err) => console.error ('error', err)); 
writeStream.on('error', (err) => console.error ('error', err)); 
filterStream.on('error', (err) => console.error ('error', err)); 

readStream.pipe(filterStream).pipe(writeStream); 