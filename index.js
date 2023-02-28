const http = require("http");
const server = http.createServer(function (req, res) {
  res.write(req.url + "\n");
  /*
  localhost:3000/xxxx 
 yraje3 /xxxx  */
  console.log(req.url);

  if (req.url == "/home") {
    res.statusCode=200;
    res.write("welcome to the home page");
  } else if (req.url == "/contact") {
    res.statusCode=200;
    res.write("welcome to the contact page");
  } else {
    res.statusCode=404;
    res.write("page not found");
  }

  console.log(res.statusCode);
  res.writeHead(res.statusCode); // send the status code in the response header
  res.end();
});

server.listen(3000, function () {
  console.log("server is working correctly");
});
