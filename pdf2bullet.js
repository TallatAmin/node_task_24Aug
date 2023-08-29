const pdfParse = require("pdf-parse");
const fs = require("fs");
const readline = require("readline");

const bulletPointRegex = /^[*\-•∙‣⁃◦]\s+(.+)/;
const bulletPoints = [];

const pdfBook = fs.readFileSync("book.pdf");
// console.log("file read: ", pdfBook);

// // check only ( for pdf )
// pdfParse(pdfBook).then((data) => {
//   try {
//     console.log("Content", data.text);
//     console.log("Total Pages = ", data.numpages);
//   } catch (error) {
//     throw new Error(error);
//   }
// });

pdfParse(pdfBook).then((data) => {
  try {
    const lines = data.text.split("\n");
    lines.forEach((line) => {
      const match = line.match(bulletPointRegex);
      if (match) {
        bulletPoints.push(match[1]);
      }
    });

    const bulletPointsString = bulletPoints.join("\n");
    fs.writeFileSync("bulleted_book.txt", bulletPointsString);
    console.log("Extracted bullet points saved to bulleted_book.txt");
  } catch (error) {
    console.error("Error:", error.message);
  }
});
