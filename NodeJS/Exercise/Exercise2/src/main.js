const fs = require('fs');
const inputs = fs.createReadStream('../data/input.txt');
const outputs = fs.createWriteStream('../data/output.txt');

inputs.on('data', (chunk) => {
    outputs.write(chunk);
});

inputs.on('end', () => {
    outputs.end();
});