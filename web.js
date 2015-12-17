var express = require('express');
var app = express()	
  , path = require('path');


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/test.html');
  console.log(__dirname)
});

var server = app.listen(81, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});