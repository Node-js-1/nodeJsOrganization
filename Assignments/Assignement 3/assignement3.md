## Assignment: Create a Basic Temperature Conversion Module in Node.js

Objective: Develop a Node.js module that can convert temperatures between Celsius and Fahrenheit, and then use this module in a main application.

Part 1: Building the Module

Create a file named temperatureConverter.js.
In this file, write two functions:
celsiusToFahrenheit(celsius): Converts Celsius to Fahrenheit.
fahrenheitToCelsius(fahrenheit): Converts Fahrenheit to Celsius.
Each function should take one parameter (the temperature to convert) and return the converted temperature.
Export these functions as module exports.

Part 2: Using the Module

Create another file named app.js.
In app.js, import the temperatureConverter.js module.
Use the imported functions to convert a few sample temperatures (e.g., 0°C, 32°F, 100°C) and log the results to the console.
Expected Output for app.js:

Console logs showing the converted temperatures. For example:
"0°C is 32°F"
"32°F is 0°C"
"100°C is 212°F" 