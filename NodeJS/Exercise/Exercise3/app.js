const {celsiusToFahrenheit, fahrenheitToCelsius} = require('./temperatureConverter')
// console.log(celsiusToFahrenheit(19));


const celsiusTemperatures = [0, 100];
const fahrenheitTemperatures = [32, 212];

celsiusTemperatures.forEach(element => {
    console.log(`${element} is ${celsiusToFahrenheit(element)}`);
});

fahrenheitTemperatures.forEach(element => {
    console.log(`${element} is ${fahrenheitToCelsius(element)}`);
});