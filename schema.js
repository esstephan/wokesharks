//import mongoose and Schema
var mongoose = require('mongoose');

//connect to mongo database via heroku
mongoose.connect('mongodb://heroku_sljnwp26:et582bohep8jaij010rtgrg7e6@ds139619.mlab.com:39619/heroku_sljnwp26');

//open a mongoose connection
var db = mongoose.connection;

//handle errors on connection
db.on('error', console.error.bind(console, 'connection error'));

//handle successful connection
db.once('open', function() {
  console.log('Successfuly connected to database')
});

//create new linkClick schema
var linkClickSchema = mongoose.Schema({
  url: String,
  count: Number,
  date: Array
});

//create new pageView schema
var pageViewSchema = mongoose.Schema({
  title: String,
  count: Number,
  date: Array
});

//create models for each schema
var linkClickModel = mongoose.model('linkClickSchema', linkClickSchema);
var pageViewModel = mongoose.model('pageViewSchema', pageViewSchema);

//export models
module.exports = {
  linkClickModel: linkClickModel,
  pageViewModel: pageViewModel,
};



