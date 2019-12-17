const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.cookie("cookie", "fist cookie ever");
  res.send("Hello You and Me");
});

app.listen(port, () => console.log("App listening on port " + port));

/* The order in which you use middleware in Express matters: middleware declared earlier will get called first, and if it can handle a request, any middleware declared later will not get called. */

/*
 res.cookie("cookie", "fist cookie ever");
 above will produce the below in the console
 document.cookie
"cookie=fist%20cookie%20ever" */
