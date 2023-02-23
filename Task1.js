var express = require("express");
var app = express();
const port = process.env.PORT || 3001;
app.get("/", function(req, res) {
  res.send("Hello World!");
});

app.listen(port);
