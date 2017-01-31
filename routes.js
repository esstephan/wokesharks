//require schemas from schema.js
var model = require('./schema.js');

//export routes to app file
module.exports = function(app, express) {

  /* linkClick route */
  //GET request
  app.get('/linkClick', function(req, res) {
    var url = req.body.url;
    //find url in database
    model.linkClickModel.findOnce({"url": url}, function(err, links) {
      if(err) {
        throw err;
      } else {
        res.status(200).send(links);
      }
    });
  });

  //POST request
  app.post('/linkClick', function(req, res) {
    //pull url from request body
    var url = req.body.url;
    //create new timestamp
    var date = Date();
    //check if url exists in database
    model.linkClickModel.findOne({url: url}, function(err, link) {
      //if it exists, update count and add timestamp
      if(link) {
        link.count++;
        link.date.push(date);
        link.save();
        res.status(200).send("Successfully updated link count")
      //if not, create new record, set count to 1 and add timestamp
      } else {
        model.linkClickModel.create({
          url: url,
          count: 1,
          date: [date]
        }, function(err) {
          if(err) {
            throw err;
          } else {
            res.status(200).send("Successfully created new link record");
          }
        });
      }
    });
  });

  /* pageView route */
  //GET request
  app.get('/pageView', function(req, res) {
    var title = req.body.title;
    //find title in database
    model.pageViewModel.find({}, function(err, pages) {
        if(err) {
        throw err;
      } else {
        res.status(200).send(pages);
      }
    });
  });

  //POST request
  app.post('/pageView', function(req, res) {
    //pull title from request body
    var title = req.body.title;
    //create new timestamp
    var date = Date();
    //check if title exists in database
    model.pageViewModel.findOne({title: title}, function(err, page) {
      //if it exists, update count and add timestamp
      if(page) {
        page.count++;
        page.date.push(date);
        page.save();
        res.status(200).send("Successfully updated page count")
      //if not, create new record, set count to 1 and add timestamp
      } else {
        model.pageViewModel.create({
          title: title,
          count: 1,
          date: [date]
        }, function(err) {
          if(err) {
            throw err;
          } else {
            res.status(200).send("Successfully created new page record");
          }
        });
      }
    });
  });

};




