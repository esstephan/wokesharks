//import app and schema files
var app = require('server.js');
var LinkClick = require('./linkClickModel.js')
var PageView = require('./pageViewModel.js')

/* linkClick route */

//GET request
app.get('/linkClick', function(req, res) {
  //do stuff

  console.log("REQ BODY", req.body)
})

//POST request
app.post('/linkClick', function(req, res) {
  //do stuff here

  console.log("REQ BODY", req.body)
})

/* pageView route */

//GET request
app.get('/pageView', function(req, res) {
  //do stuff
})

//POST request
app.post('/pageView', function(req, res) {
  //do stuff here
})




