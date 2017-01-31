var model = require('./schema.js');

module.exports = function(app, express) {

  /* linkClick route */
  //GET request
  app.get('/linkClick', function(req, res) {
    var url = req.body.url;
    model.linkClickModel.findOne({url: url}, function(err, link) {
      if(err) {
        throw err;
      } else {
        res.status(200).send(link);
      }
    });
  });

  //POST request
  app.post('/linkClick', function(req, res) {
    var url = req.body.url;
    var date = Date();

    model.linkClickModel.findOne({url: url}, function(err, link) {
      if(link) {
        link.count++;
        link.date.push(date);
        link.save();
        res.status(200).send("Successfully updated link count")
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
    model.pageViewModel.findOne({title: title}, function(err, page) {
        if(err) {
        throw err;
      } else {
        res.status(200).send(page);
      }
    });
  });

  //POST request
  app.post('/pageView', function(req, res) {
    var title = req.body.title;
    var date = Date();

    model.pageViewModel.findOne({title: title}, function(err, page) {
      if(page) {
        page.count++;
        page.date.push(date);
        page.save();
        res.status(200).send("Successfully updated page count")
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




