//import mongoose and schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//connect to mongodb via heroku
mongoose.connect('mongodb://heroku_9w8lpnqg:kqq330ut2brf2u5e4lk66u3bbp@ds133249.mlab.com:33249/heroku_9w8lpnqg');

//open a mongoose connection
var db = mongoose.connection;

//handle errors on connection
db.on('error', cosole.error.bind(console, 'connection error'));

//handle successful connection
db.once('open', function() {
  console.log('Successfuly connected to database')
});

//export database
module.exports = db;