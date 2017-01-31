//import mongoose and Schema
var mongoose = require('mongoose');

//connect to mongo database via heroku
mongoose.connect('mongodb://heroku_dvqdh9sw:12r565q0l5b8dq6sf383d1mtm4@ds137759.mlab.com:37759/heroku_dvqdh9sw');
//mongoose.connect('mongodb://localhost:8080/data/db');

//open a mongoose connection
var db = mongoose.connection;

//handle errors on connection
db.on('error', console.error.bind(console, 'connection error'));

//handle successful connection
db.once('open', function() {
  console.log('Successfuly connected to database')
});

var linkClickSchema = mongoose.Schema({
  url: String,
  count: Number,
  date: Array
});

var pageViewSchema = mongoose.Schema({
  title: String,
  count: Number,
  date: Array
});

var linkClickModel = mongoose.model('linkClickSchema', linkClickSchema);
var pageViewModel = mongoose.model('pageViewSchema', pageViewSchema);

module.exports = {
  linkClickModel: linkClickModel,
  pageViewModel: pageViewModel,
};



