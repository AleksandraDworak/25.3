/* w updateNote writeFile powinno byc wewnatrz callbacka od readFile

dodatkowo - po co Ci funkcja read? w tym wypadku czytelniej byloby ją pominąć, ewentualnie zapisac
app.get('/getNote', read); */

var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser')
var app = express();
var stringifyFile;

app.use(bodyParser.json());

app.get('/getNote', read)

app.post('/updateNote/:note', function (req, res) {
  fs.readFile('./test.json', 'utf-8', function (err, data) {
    if (err) throw err;
    stringifyFile = data + req.params.note;
    write(stringifyFile)
  });
});

function read(req, res) {
  fs.readFile('./test.json', 'utf-8', function (err, data) {
    if (err) throw err;
    stringifyFile = data;
    res.send(data);
  });
}

function write(stringifyFile) {
  fs.writeFile('./test.json', stringifyFile, function (err) {
    if (err) throw err;
  })
}

app.use(function (req, res, next) {
  res.status(404).send('nie znaleziono');
})

var server = app.listen(3000);