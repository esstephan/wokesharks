//import mongoose and Schema
var mongoose = require('mongoose');

//connect to mongo database via heroku
mongoose.connect('mongodb://heroku_6zbmk6ll:qe3h9hugfbbro9rs5i6n861p5r@ds137759.mlab.com:37759/heroku_6zbmk6ll');
//mongoose.connect('mongodb://localhost:8080/data/db');

//open a mongoose connection
var db = mongoose.connection;

//handle errors on connection
db.on('error', console.error.bind(console, 'connection error'));

//handle successful connection
db.once('open', function() {
  console.log('Successfuly connected to database')
});

// //create new linkClick schema
// var linkClickSchema = mongoose.Schema({
//   url: String,
//   count: Number,
//   date: Array
// });

// //create new pageView schema
// var pageViewSchema = mongoose.Schema({
//   title: String,
//   count: Number,
//   date: Array
// });

// //create models for each schema
// var linkClickModel = mongoose.model('linkClickSchema', linkClickSchema);
// var pageViewModel = mongoose.model('pageViewSchema', pageViewSchema);

// //export models
// module.exports = {
//   linkClickModel: linkClickModel,
//   pageViewModel: pageViewModel,
// };



