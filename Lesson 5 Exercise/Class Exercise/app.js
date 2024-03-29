const fs = require("fs");

const readableSource = "./readfile.txt";
const writableSource = "./writefile.txt";

const readableStream = fs.createReadStream(readableSource);
const writableStream = fs.createWriteStream(writableSource);

readableStream.on("error", (err) => console.log("error: ", err));
writableStream.on("error", (err) => console.log("error: ", err));

readableStream.pipe(writableStream);
