var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser')
var app = express();
var stringifyFile;

app.use(bodyParser.json());

app.get('/getNote', function(req, res){
read(req, res);
});


app.post('/updateNote/:note', function(req, res){
  fs.readFile('./test.json', 'utf-8', function(err, data){
    if (err) throw err;
    stringifyFile = data + req.params.note;
    });
  fs.writeFile('./test.json', stringifyFile, function(err){
    if (err) throw err;
    console.log('file updated');
  })

});


function read(req, res) {
  fs.readFile('./test.json', 'utf-8', function(err, data){
    if (err) throw err;
    stringifyFile = data;
    res.send(data);
    });

}


app.use(function(req, res, next) {
  res.status(404).send('nie znaleziono');

})

var server= app.listen(3000);
