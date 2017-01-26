//import mongoose and schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//connect to heroku with mongoose
mongoose.connect('enter heroku endpoint here');

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