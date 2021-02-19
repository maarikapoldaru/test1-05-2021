var http = require("http");
let url = require("url");

http.createServer(function (req, res) {
  // send headers
  res.writeHead(200, {"Content-Type": "text/html"});
  var q = url.parse(req.url, true).query;
  const txt = q.year + ":" + q.month;res.end(txt);
}).listen(8080, "0.0.0.0'", () => {
  console.log("server is up and running, try http://localhost:8080/summer?year=2022&month=2");
}); //the server object listens on port 8080
