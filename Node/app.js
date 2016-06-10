var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var Entities = require('html-entities').XmlEntities;
var entities = new Entities();

app.use(express['static']('public'));
app.use(bodyParser.urlencoded({extended: true}));

var messages = [];
app.get('/messages', function(req, res){
  res.send(messages);
});

app.post('/messages', function(req, res){
  messages.push(entities.encode(req.body.message));
  res.send("OK");
});

app.listen(process.env.PORT || 9999);
