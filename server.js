// init project
const express = require('express');
const requestIp = require('request-ip');
const app = express();
const port = process.env.PORT || 8080;

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html

//show index page
app.get("/", (req, res, next) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.get("/api/whoami", (req, res) => {
  var header = req.headers;
  console.log(header);

  var sysInfo = header["user-agent"]
  //os = os.slice(  os.indexOf("(")+1, os.indexOf(")")  ); //"" due to hyphen

  var language = header["accept-language"];
  language = language.slice(  0, language.indexOf(";")  );
  
  const clientIp = requestIp.getClientIp(req);
  
  var result = {
    "IP address" : clientIp,
    "language": language,
    "system info": sysInfo
  };
  
  console.log(result);
  res.send(result);
  res.end();
});

// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

// listen for requests :)
var listener = app.listen(port, function () {
  console.log('Your app is listening on port ' +port);
});
