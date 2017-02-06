//import mongoose
var mongoose = require('mongoose');

//connect to mLab database via heroku
mongoose.connect('mongodb://heroku_0tmvq5b9:qr6ah07s4molbdkkrdjllne027@ds139969.mlab.com:39969/heroku_0tmvq5b9');

//open a mongoose connection
var db = mongoose.connection;

//handle errors on connection
db.on('error', console.error.bind(console, 'connection error'));

//handle successful connection
db.once('open', function() {
  console.log('Successfuly connected to database')
});

//export database connection
module.exports = db;




