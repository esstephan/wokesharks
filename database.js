//import mongoose
var mongoose = require('mongoose');

//connect to mLab database via heroku
mongoose.connect('mongodb://heroku_hdfrmpbr:v33ti3trr59cspf187rpmt0nm7@ds139619.mlab.com:39619/heroku_hdfrmpbr');

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



