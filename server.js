var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser')
var app = express();
var stringifyFile;
app.use(express.static('assets'));
app.use(bodyParser.json());


app.use('/store', function (req, res, next) {
  console.log('Jestem pośrednikiem przy żądaniu do /store');
  next();
});

app.get('/', function (req, res) {
  res.sendFile('/index.html');
});

app.get('/store', function (req, res) {
  res.send('To jest sklep');
});


app.use(function (req, res, next) {
  res.status(404).send('nie znaleziono');

})

var server = app.listen(3000);
