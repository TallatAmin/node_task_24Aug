const fs = require("fs");
const readline = require("readline");

const bulletPointRegex = /^[*\-•]\s+(.+)/;
const bulletPoints = [];

if (process.argv.length > 3) {
  console.error("Usage: node file error, too many input");
  process.exit(1);
}

const inputFilePath = process.argv[2];

const readLine = readline.createInterface({
  input: fs.createReadStream(inputFilePath),
  crlfDelay: Infinity,
});

readLine.on("line", (line) => {
  const match = line.match(bulletPointRegex);
  if (match) {
    bulletPoints.push(match[1]);
  }
});

readLine.on("close", () => {
  console.log("Extracted bullet points:");
  bulletPoints.forEach((bullet, index) => {
    console.log(`${index + 1}. ${bullet}`);
  });
});
