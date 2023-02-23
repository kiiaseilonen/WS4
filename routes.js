// Otetaan express-moduuli käyttöön
var express = require("express");
var app = express();
const port = process.env.PORT || 3001;
// Luodaan reitit ja niiden toiminnallisuudet
app.get("/", function(req, res) {
  res.send("Hello World!");
});

app.get("/list", function(req, res) {
  res.send("Listing data from a file!");
});

// Oletusreitti joka tarjoillaan, mikäli muihin ei päädytty.
app.get("*", function(req, res) {
  res.send("Cant find the requested page", 404);
});

app.listen(port);

