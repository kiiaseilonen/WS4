// Otetaan express-moduuli käyttöön
var express = require("express");

var app = express();
const port = process.env.PORT || 3001;
// Tarjoillaan sisältöjä public-hakemiston alta halukkaille
app.use(express.static("public/demosite/"));

// Web-palvelimen luonti Expressin avulla
app.listen(port);