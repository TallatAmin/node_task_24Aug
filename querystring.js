const querystring = require("querystring");

// let urlQuery = "user=admin&articles=1&articles=2&articles=3&access=true";

// let parsedObjectQuery = querystring.parse(urlQuery, "&", "=");

// console.log("Parsed Query:", parsedObjectQuery);

// Specify the URL object to be serialized
let urlObject = {
  id: 15,
  username: "kminchelle",
  email: ["kminchelle@mail.com","kminchelle@qq.com"],
  gender: "female",
};

// Use the stringify() method on the object
let parsedQuery = querystring.stringify(urlObject);

console.log("Parsed Query:", parsedQuery);
