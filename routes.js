//import app and schema files
var LinkClick = require('./Models/linkClickModel.js');
var PageView = require('./Models/pageViewModel.js');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

module.exports = function(app, express) {

  /* linkClick route */
  //GET request
  app.get('/linkClick', function(req, res) {
    //set url to url passed into request body
    var url = req.body.url;
    //check to see if url exists in the Link schema table
    LinkClick.findOne({url: url})
      .then(function(link) {
        //if it doesn't exist, throw an error. Else return count
        if(!link) {
          console.log("url does not exist")
        } else {
          res.send(link.count)
        }
      });
  });

  //POST request
  app.post('/linkClick', function(req, res) {
    //set url to url passed into request body
    var url = req.body.url;
    //check to see if the url exists in the Link schema table
    LinkClick.findOne({url: url})
      .then(function(link) {
        //if it exists, update count
        if(link) {
          link.count = link.count++;
          //save updates
          link.save(function(err) {
            if(err) throw err;
            else console.log('link count updated')
          });
        //create new link and set count to 1
        } else {
          var newLink = new LinkClick({
            url: url,
            count: 1
          });
          //save new link
          newLink.save(function(err) {
          if(err) throw err;
          else console.log('new link saved')
          });
        }
      })
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

};
