// Otetaan express-moduuli käyttöön
var express = require("express");

var app = express();
var server = app.listen(process.env.PORT || 8081, () => {
  console.log('Server is started on 127.0.0.1:'+ (process.env.PORT || 8081))
})
// Tarjoillaan sisältöjä public-hakemiston alta halukkaille
app.use(express.static("public/demosite/"));

// Web-palvelimen luonti Expressin avulla
app.listen(server);