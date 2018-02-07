

var express = require('express');

var app = express();

var http = require('http').Server(app);

var path = require('path');

var router = express.Router()

http.listen(8080);

var visitorsData = {};

app.use(express.static(path.join(__dirname,'public')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/web/index.html'));
     console.log("Web is running")
});

app.get('/index.html', function(req, res){
      res.sendFile(path.join(__dirname, '/public/web/index.html'));
      console.log("Web is running")
});

app.get('/app', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/app/index.html'));
    console.log("App is running")
});

app.get('/app/*', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/app/index.html'));
    console.log("App is running")
});











