// app.js

const stringUtils = require('./stringUtils');

const sampleString = "hello world";
const reversedString = "hello";

console.log(`Capitalizing "${sampleString}": ${stringUtils.capitalize(sampleString)}`);
console.log(`Reversing "${reversedString}": ${stringUtils.reverse(reversedString)}`);
 