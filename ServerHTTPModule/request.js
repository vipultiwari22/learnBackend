const { error } = require("console");
const http = require("http");
const options = {
  hostname: "fakestoreapi.com",
  path: "products/1",
  method: "GET",
};

const ApiReq = http.request(options, (apiRes) => {
  apiRes.on("data", (data) => {
    console.log(data.toString());
  });
});

ApiReq.on("error", (error) => {
  console.log(error);
});

ApiReq.end();
