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
        //if it doesn't exist throw an error, else return count
        if(!link) {
          console.log("url does not exist")
        } else {
          res.json(link)
        }
      });
  });

  //POST request
  app.post('/linkClick', function(req, res) {
    //set url to url passed into request body
    var url = req.body.url;
    //create new timestamp
    var date = Date();
    //check to see if the url exists in the Link schema table
    LinkClick.findOne({url: url})
      .then(function(link) {
        //if it exists, update count
        if(link) {
          //add timestamp
          link.date.push(date);
          //update count
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
            count: 1,
            date: [date]
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
    var title = req.body.title;
    //check to see if url exists in the Link schema table
    PageView.findOne({title: title})
      .then(function(page) {
        //if it doesn't exist throw an error, else return count
        if(!page) {
          console.log("url does not exist")
        } else {
          res.json(page)
        }
      });
  });

  //POST request
  app.post('/pageView', function(req, res) {
    //set url to url passed into request body
    var title = req.body.title;
    //create new timestamp
    var date = Date();
    //check to see if the url exists in the Link schema table
    PageView.findOne({title: title})
      .then(function(page) {
        //if it exists, update count
        if(page) {
          //add timestamp
          page.date.push(date);
          //update count
          page.count = page.count++;
          //save updates
          page.save(function(err) {
            if(err) throw err;
            else console.log('page count updated')
          });
        //create new link and set count to 1
        } else {
          var newPage = new PageView({
            title: title,
            count: 1,
            date: [date]
          });
          //save new link
          newPage.save(function(err) {
          if(err) throw err;
          else console.log('new page saved')
          });
        }
      })
  });

};
