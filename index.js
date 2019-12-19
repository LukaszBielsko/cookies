const express = require("express");
const app = express();
const port = 3000;
const html = require("./htmls");

const logger = (req, res, next) => {
  console.log(req.originalUrl);
  next();
};

app.use(logger);

app.get("/", (req, res) => {
  res.cookie("cookie", "1"); // set a cookie with a name of 'cookie' and value of '1' cookie=1
  if (req.headers.cookie) {
    let cookie = req.headers.cookie.split("=");
    const cookieValue = cookie[1];
    res.send(html.knownUser);
  }
  res.send(html.stranger);
});

app.listen(port, () => console.log("App listening on port " + port));

/* 
  The order in which you use middleware in Express matters: middleware 
  declared earlier will get called first, and if it can handle a request, 
  any middleware declared later will not get called. 
*/

/*
  res.cookie("cookie", "fist cookie ever");
  above will produce the below in the console
  document.cookie
  "cookie=fist%20cookie%20ever" 
*/

/* 
  logger without next() will run before every page visit
  logger with next() will be called only once
*/
