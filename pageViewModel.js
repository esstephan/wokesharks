//import mongoose and Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/* PageView Schema */
//create new pageView schema
var pageViewSchema = new Schema({
  title: String,
  count: Number
});

//define a mongoose Model
module.exports = mongoose.model('PageView', pageViewSchema);

