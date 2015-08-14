var express = require('express');
var app = express();
var bodyParser = require('body-parser')

app.use(express.static('dist/static'));
app.use(bodyParser.json());

app.use('/compile', require('./routes/compile'))

var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)
});
