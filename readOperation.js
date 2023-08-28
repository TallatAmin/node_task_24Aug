const pdfParse = require("pdf-parse");
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
  const bulletPointsString = bulletPoints.join("\n");
  fs.writeFileSync("bulleted.txt", bulletPointsString);
  console.log("Extracted bullet saved to bulleted.txt ");
});

// const pdfBook = fs.readFileSync("book.pdf");
// console.log(pdfBook);

// pdfParse(pdfBook).then((data) => {
//   try {
//     console.log("Content", data.text);
//     console.log("Total Pages = ", data.numpages);
//   } catch (error) {
//     throw new Error(error);
//   }
// });

// pdfParse(pdfBook).then((data) => {
//   try {
//     const lines = data.text.split("\n");
//     lines.forEach((line) => {
//       const match = line.match(bulletPointRegex);
//       if (match) {
//         bulletPoints.push(match[1]);
//       }
//     });

//     // const outputStream = fs.createWriteStream(inputFilePath);
//     // outputStream.on("open", () => {
//     //   bulletPoints.forEach((bullet, index) => {
//     //     outputStream.write(`${index + 1}. ${bullet}\n`);
//     //   });
//     //   outputStream.end();
//     //   console.log("Bullet points added to the file.");
//     // });
//   } catch (error) {
//     throw new Error(error);
//   }
// });
