const { error } = require("console");
const http = require("http");

const PORT = 4000;
const HOSTNAME = "loaclhost";

const server = http.createServer((req, res) => {
  //Home Page
  //About Page
  //Conatct Page
  //Product page
  //Rest...>Error

  if (req.url == "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Welcomr o Node Js Server by Vipul Tiwari!");
  } else if (req.url == "/about") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("About Page");
  } else if (req.url == "/coatct") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Contact Page");
  } else if (req.url == "/product") {
    const options = {
      hostname: "fakestoreapi.com",
      path: "/products/1",
      method: "GET",
    };

    const ApiReq = http.request(options, (apiRes) => {
      apiRes.on("data", (data) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(data.toString());
      });
    });

    ApiReq.on("error", () => {
      console.log(error);
    });

    ApiReq.end();
  } else {
    res.statusCode = 500;
    res.setHeader("Content-Type", "text/plain");
    res.end("Server Error!");
  }
});

server.listen(PORT, () => {
  console.log(`Server runnig ar ${HOSTNAME} : ${PORT}`);
});
