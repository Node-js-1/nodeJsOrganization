# JavaScript (ES6+) Cheat Sheet

## Variable Declarations
- `let`: Block-scoped local variable.
- `const`: Block-scoped constant.

## Arrow Functions
- Syntax: `(params) => { return ... }`
- No own `this`: Inherits `this` from the parent scope.

## Template Literals
- Backticks: `` `Hello, ${name}!` ``

## Destructuring
- Arrays: `[a, b] = [1, 2]`
- Objects: `{a, b} = {a: 1, b: 2}`

## Default Parameters
- Function defaults: `function example(a = 1, b = 2) {}`

## Promises and Async/Await
- Promise: `new Promise((resolve, reject) => {})`
- Async/Await: `async function fetchData() { const data = await someAsyncCall(); }`

## Spread and Rest Operator
- Spread: `Math.max(...[1, 2, 3])`
- Rest: `function example(...params) {}`

## Imports and Exports
- Default export: `export default function() {}`
- Named export: `export const myFunction = () => {}`
- Import: `import myFunction from './myModule'`

This cheat sheet includes some of the most commonly used ES6+ features, which are integral to writing modern JavaScript code for Node.js applications.
 