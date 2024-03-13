const fs = require('fs');

console.log('Start reading file');

// Asynchronous file reading

fs.readFile('/path/to/file', 'utf-8', async(err, data) => {
  if  (err) {
    console.error('Error reading the file', err);
    return;
  } 
  // funkcia meore, sanam es funkcia ar daasrulebs mokmedebas, manamde pirveli ar gaishveba
  console.log('File content:', data);
});


console.log('Continue with other tasks');


const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/'); 
//chemi apliakcia usmens lokalur ports. req. metodit daamugamo romeli metodi mogmartavs. (parametrebad rogor gadavce, magas vigeb reqvestebidan)
// https rato ar vcert, https tuar chaerto web shi


const EventEmitter = require('events');
const myEmitter = new EventEmitter();

// Handling an event
myEmitter.on('event', () => {
  console.log('An event occurred!');
});

// Triggering an event
myEmitter.emit('event');
  
//fronti igebs saxels, daaemitebs fronti, ak rom data gadavcet, front rasac gamogvidzavnis is dailogeba



const fs = require('fs');
const readable = fs.createReadStream('largefile.txt'); //casakitxad gaamzade
const writable = fs.createWriteStream('output.txt'); //dasacerad gaamzade

readable.on('data', (chunk) => {
  const canContinue = writable.write(chunk); // chunk - bufferis patara nawili. buffer - (nebismieri ramis(file audio))) is qeshirebuli kontenti
  if (!canContinue) {
    readable.pause();
    writable.once('drain', readable.resume);
  }
});

readable.on('end', () => {
  writable.end();
});

// am punkciis gamokenebit gaaketet text file, chaceret text, es erti text gadacreet meore fileshi romelic ikneba carieli 