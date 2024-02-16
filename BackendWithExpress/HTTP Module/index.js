const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.write("<h1>Hello World</h1>");
  } else if (req.url == "/about") {
    res.write("<h1>About Page</h1>");
  }
  res.end();
});
const Port = 5000;

const serv = server.listen(Port);

if (serv) {
  console.log("Server Started", Port);
} else {
  console.log("Server End");
}
