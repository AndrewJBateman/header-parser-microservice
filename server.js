// init project
const express = require('express');
const requestIp = require('request-ip');
const app = express();
const port = process.env.PORT || 3000;

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (req, res) => {
  var header = req.headers;
  console.log(header);

  var os = header["user-agent"]
  os = os.slice(  os.indexOf("(")+1, os.indexOf(")")  ); //"" due to hyphen

  var language = header["accept-language"];
  language = language.slice(  0, language.indexOf(",")  );
  
  const clientIp = requestIp.getClientIp(req);
  
  var result = {
    "IP address" : clientIp,
    "language": language,
    "operating system": os
  };
  
  console.log(result);
  res.send(result);
  res.end();
});

// listen for requests :)
var listener = app.listen(port, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
