//import mongoose and Schema
var mongoose = require('mongoose');

/* PageView Schema */
//create new pageView schema
var pageViewSchema = mongoose.Schema({
  title: String,
  count: Number,
  date: Array
});

//define a mongoose Model
module.exports = mongoose.model('PageView', pageViewSchema);


