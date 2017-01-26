//import app and schema files
var app = require('server.js');
var LinkClick = require('./linkClickModel.js')
var PageView = require('./pageViewModel.js')

//enable CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/* linkClick route */

//GET request
app.get('/linkClick', function(req, res) {
  //do stuff
})

//POST request
app.post('/linkClick', function(req, res) {
  //do stuff here
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




