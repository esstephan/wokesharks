//import mongoose and schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//connect to mongo database via heroku
mongoose.connect('mongodb://heroku_7xvkrhc2:da0n3g7rpv2r755g9e9fe535de@ds133279.mlab.com:33279/heroku_7xvkrhc2');

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
