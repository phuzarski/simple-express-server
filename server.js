var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//Allow all requests from all domains & localhost
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var animals = [
  "puppy",
  "gowno",
  "bleh"
];

var artists = [
  {
  "id": 1,
  "name": "name_test1",
  "email": "test1@test1.pl",
  "pass" : "pass_test1",
  "pass_conf": "pass_conf_test1"
},
{
  "id": 2,
  "name": "name_test2",
  "email": "test2@test2.pl",
  "pass" : "pass_test2",
  "pass_conf": "pass_conf_test2"
}
]
app.get('/animals', function(req, res) {
  res.send(animals);
});

app.get('/artists', function(req, res) {
  res.send(artists);
});

app.listen(6060);
