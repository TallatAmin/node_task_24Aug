const fs = require("fs");

function generateRandomPoints(numLines) {
  const characters = ["*", "-", "•", ""]; // Bullet characters and empty string (non-bullet)
  const lines = [];

  for (let i = 0; i < numLines; i++) {
    const randomCharacter =
      characters[Math.floor(Math.random() * characters.length)];
    const line = randomCharacter + " ";
    lines.push(line + `Line ${i + 1}`);
  }

  return lines.join("\n");
}

function createDataFile() {
  const numLines = 100000; 
  const content = generateRandomPoints(numLines);

  fs.writeFile("data.txt", content, "utf-8", (err) => {
    if (err) {
      console.error("Error creating file:", err);
    } else {
      console.log('File "data.txt" created successfully.');
    }
  });
}

createDataFile();
