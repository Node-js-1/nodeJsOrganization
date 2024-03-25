const readline = require('readline');
const { getWeather } = require('./src/api/weatherAPI');
require('dotenv').config();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a city name to get current weather: ', (city) => {
    getWeather(city).then(() => {
        rl.close();
    }).catch((err) => {
        console.error(err);
        rl.close();
    });
});
 