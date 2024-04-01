const fs = require('fs');
const readableStream = fs.createReadStream('../../../file.txt'); 

readableStream.on('data',(chunk) => {
    console.log("");
});

readableStream.on('end',() => {
    console.log("no more data");
});

readableStream.on('error',(error) => {
    console.log("error",error.message);
});


const fs = require('fs'); 
const writableStream = fs.createWriteStream(../../file.txt);

writableStream.write('writing data.\n');
writableStream.end('end of the stream');

writableStream.on('finish', () => {
    console.log('data successfully written to file');
});

writableStream.on('error', (error) => {
    console.log('error' error.message);
});



Stream.on('error', (err) => {
    console.error('error:',err);
});