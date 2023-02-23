// Otetaan express-moduuli käyttöön
var express = require("express");

var app = express();

// Tarjoillaan sisältöjä public-hakemiston alta halukkaille
app.use(express.static("public/demosite/"));

// Web-palvelimen luonti Expressin avulla
app.listen(8081, function() {
  console.log("8081 is the magic port!");
});