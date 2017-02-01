//import mongoose and Schema
var mongoose = require('mongoose');

//connect to mongo database via heroku
mongoose.connect('mongodb://heroku_5nm2kzjp:48fp17v2bdrbru057aeov3jopg@ds139619.mlab.com:39619/heroku_5nm2kzjp');

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



