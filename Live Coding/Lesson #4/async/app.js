const fs = require('fs').promises;

async function processNumbers(){
try {
    const data = await fs.readFile('numbers.txt', 'utf8');
    const numbers = data.split('\n').map(Number); 

    const squaredNumbers = numbers.map(number => number * number);

    await fs.writeFile('squaredNumbers.txt', squaredNumbers.join('\n'));
    console.log('Numbers written to squaredNumbers.txt');

}
catch(error){
console.error('An error occured:',error);
}
}

processNumbers();