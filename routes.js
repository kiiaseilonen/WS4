// Otetaan express-moduuli käyttöön
var express = require("express");
var app = express();
var server = app.listen(process.env.PORT || 8081, () => {
    console.log('Server is started on 127.0.0.1:'+ (process.env.PORT || 8081))
  })
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

app.listen(server);

