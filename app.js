const ejs = require("ejs");
const fs = require("fs");

const http = require("http");

const host = "localhost";
const port = 8000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;

  if (req.url === "/user" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write("Hi there, This is a endpoint for users via GET");
    res.end();
  } else if (req.url === "/products" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write("Hi there, This is a endpoint for products via GET");
    res.end();
  } else if (req.url === "/page" && req.method === "GET") {
    // Read the template file
    fs.readFile("main.ejs", "utf8", (err, template) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Internal Server Error" }));
        return;
      }

      // Compile the EJS template with data
      const renderedPage = ejs.render(template, { name: "Tallat Amin" });

      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(renderedPage);
      res.end();
    });
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route not found" }));
  }
});

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
