//1

const fs = require('fs');

console.log('Start reading file');


fs.readFile('/book/file.txt', 'utf-8', (err,data) => {
    if(err){
        console.error('Error',err);
        return;
    }

    console.log('File:',data); 
});


//2

const http = require('http'); 

http.createServer((req,res) => {

res.writeHead(200, {'content-Type':'text/plain'});
res.end('Hello World\n');
}).listen(3000); 

console.log('Server runs at http://127.0.0.1.3000');

//3

const EventEmiiter = require('events'); 
const myEmitter = new EventEmitter();

myEmitter.on('event', () => {
    console.log('An event occured!');


})

myEmitter.emit('event');

//4

const fs = require('fs');
const readable = fs.createReadStream('largefile.txt');
const writable = fs.createWriteStream('output.txt')


readable.on('data',(chunk) => {
    const canContinue = writable.write(chunk);
    if(!canContinue){
        readable.pause()
     writable.once('drain',readable.resume);
    }
    
});

readable.on('end', () => {
    writable.end();
})