//import app and schema files
var LinkClick = require('./Models/linkClickModel.js');
var PageView = require('./Models/pageViewModel.js');

module.exports = function(app, express) {

  /* linkClick route */
  //GET request
  app.get('/linkClick', function(req, res) {
    //do stuff
    res.send("HEY IAN")
  });

  //POST request
  app.post('/linkClick', function(req, res) {
    //do stuff here
    res.send("HEY IAN");
  });

  /* pageView route */
  //GET request
  app.get('/pageView', function(req, res) {
    //do stuff
    res.send("HEY IAN");
  });

  //POST request
  app.post('/pageView', function(req, res) {
    //do stuff here
    res.send("HEY IAN");
  });

}





