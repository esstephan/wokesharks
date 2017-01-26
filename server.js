//import dependencies
var mongoose = require('mongoose');
var bodyParse = require('body-parse');
var express = require('express');
var path = require('path');
var app = express();

//set app to use body-parser
app.use(bodyParse.urlencoded({ extended: false }));
app.use(bodyParse.json());

//set app to render static files
app.use(express.static(path.join(__dirname, 'client')));

//set port to whatever port heroku picks, default to 8080
port = process.env.PORT || 8080;

//create server and listen to port
var server = app.list(port);
console.log('Listening on port ' + port);

//export app and server
module.exports = app;
