var net = require("net"),
  people = [];
var s = net.createServer(function (socket) {
  socket.write("welcome to the chat\n");

  people.push(socket);
  socket.on("data", function (data) {
    people.forEach(function (person) {
      if (person !== socket && person.writable) {
        person.write(person.remoteAddress + ">" + data);
      }
    });
  });
});
s.listen(8000);
