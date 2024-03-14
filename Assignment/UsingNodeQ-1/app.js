const http = require("http");

// Sample data for products
const menProducts = [...Array(10).keys()].map((i) => ({
  id: i,
  name: `Men's Product ${i + 1}`,
}));
const womenProducts = [...Array(10).keys()].map((i) => ({
  id: i,
  name: `Women's Product ${i + 1}`,
}));

// Create a server
const server = http.createServer((req, res) => {
  // Set content type
  res.setHeader("Content-Type", "application/json");

  // Routing
  if (req.url === "/") {
    res.writeHead(200);
    res.end(JSON.stringify({ message: "Welcome to Men & Women Dummy Data" }));
  } else if (req.url === "/men") {
    res.writeHead(200);
    res.end(JSON.stringify(menProducts));
  } else if (req.url === "/women") {
    res.writeHead(200);
    res.end(JSON.stringify(womenProducts));
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ message: "Page not found" }));
  }
});

// Set the server to listen on port 3000
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
