// init project
const express = require("express");
const requestIp = require("request-ip");
const ipaddr = require("ipaddr.js");
const app = express();
const port = process.env.PORT || 8080;

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
const { request } = require("express");
app.use(cors({ optionSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html

app.get("/", (req, res, next) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/api/whoami", (req, res) => {
  const header = req.headers;
  console.log("header: ", header);

  const sysInfo = header["user-agent"];

  let language = header["accept-language"];
  language = language.slice(0, language.indexOf(";"));

  const host = header["host"];
  const clientIp = requestIp.getClientIp(req);
  const result = {
    "IP address": clientIp,
    language: language,
    "system info": sysInfo,
    host: host,
  };

  console.log("result: ", result);
  res.send(result);
  res.end();
});

app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" });
});

const listener = app.listen(port, function () {
  console.log("Your app is listening on port " + port);
});
