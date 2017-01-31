//import dependencies
var bodyParser = require('body-parser');
var express = require('express');
var model = require('./schema.js');
var path = require('path');
var app = express();
var fs = require('fs');

//enable CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//set app to use body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//set app to render static files
app.use(express.static(path.join(__dirname, 'client')));

//connect routes
app.get('/linkClick', function(req, res) {
  var url = req.body.url;
  model.linkClickModel.findOne({url: url}, function(err, link) {
    res.send(link);
  });
});

app.get('/pageView', function(req, res) {
  var title = req.body.title;
  model.pageViewModel.findOne({title: title}, function(err, page) {
    res.send(page);
  });
});

app.post('/linkClick', function(req, res) {
  var url = req.body.url;
  var date = Date();

  model.linkClickModel.findOne({url: url}, function(err, link) {
    if(link) {
      link.count++;
      link.date.push(date);
      link.save();
    } else {
      model.linkClickModel.create({
        url: req.body.url,
        count: 1,
        date: [date]
      }, function(err, link) {
      });
    }
  });

});

app.post('/pageView', function(req, res) {
  var date = Date();
  model.pageViewModel.create({
    title: req.body.title,
    count: 1,
    date: [date]
  }, function(err, products) {
    res.send(products);
  });
});

//set port to whatever port heroku picks, default to 8080
port = process.env.PORT || 8080;

//create server and listen to port
var server = app.listen(port);
console.log('Listening on port ' + port);

//export app and server
module.exports = app;






