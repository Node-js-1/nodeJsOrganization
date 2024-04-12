# Node.js Basics Cheat Sheet

## Node.js Core Modules
- `http`: Create HTTP servers.
- `fs`: Interact with the file system.
- `path`: Work with file and directory paths.
- `os`: Retrieve information about the operating system.

## Commonly Used Global Objects
- `Buffer`: Handle binary data.
- `__dirname`: The directory name of the current module.
- `__filename`: The file name of the current module.
- `process`: Information about the current process.
- `console`: Standard output and errors.

## Asynchronous Patterns
- Callbacks: `fs.readFile(filePath, (err, data) => {})`
- Promises: `new Promise((resolve, reject) => {})`
- Async/Await: `async function example() { await ... }`

## Essential Commands
- Install a package: `npm install <package_name>`
- Install globally: `npm install -g <package_name>`
- Initialize a new project: `npm init`

## Running Node.js Scripts
- Execute a script: `node script.js`

Remember, Node.js is asynchronous and non-blocking by nature, so it's essential to understand these concepts to work effectively with Node.js.
 