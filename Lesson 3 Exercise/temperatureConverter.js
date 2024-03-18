module.exports.celsiusToFahrenheit = (celsius) => {
  return celsius * (9 / 5) + 32;
};

module.exports.fahrenheitToCelsius = (fahrenheit) => {
  return ((fahrenheit - 32) * 5) / 9;
};
