const express = require("express");
const app = express();
const port = 3000;

const ex = '<div> <p>Hi, Luk! </p> <a href="/hiya">hiya</a></div>';
const stranger = '<div> <p>Hi, Stranger! </p> <a href="/hiya">hiya</a></div>';

const logger = (req, res, next) => {
  console.log(req.originalUrl);
  next();
};

app.use(logger);

app.get("/", (req, res) => {
  console.log("get: root");
  res.cookie("cookie", "1");
  if (req.headers.cookie) {
    let cookie = req.headers.cookie.split("=");
    const cookieValue = cookie[1];
    res.send(ex);
  }
  res.send(stranger);
});

app.get("/hiya", (req, res) => {
  console.log("get: hiya");
  res.send("hiya");
});

app.listen(port, () => console.log("App listening on port " + port));

/* 
  The order in which you use middleware in Express matters: middleware declared earlier will get called first, and if it can handle a request, any middleware declared later will not get called. 
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
