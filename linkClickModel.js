//import mongoose and Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/* LinkClick Schema */
//create new linkClick schema
var linkClickSchema = new Schema({
  url: String,
  count: Number
});

//define a mongoose Model
module.exports = mongoose.model('LinkClick', linkClickSchema);

