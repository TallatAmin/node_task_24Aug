const fs = require("fs");
const testBuffer = Buffer.from("test data", "base64");
console.log(testBuffer.toString("utf-8"));

let data = fs.readFileSync("Adelaar.jpg");

let buff = Buffer.from(data, "base64");

fs.writeFileSync("eagle.jpg", buff);
console.log(buff);
