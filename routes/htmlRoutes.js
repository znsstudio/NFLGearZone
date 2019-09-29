var db = require("../models");

module.exports = function(app) {
  // load homepage for user
  // getting info from form
  app.get("/", function(req, res) {
    db.Person.findAll({}).then(function(gearzonedb) {
      res.render("index", {
        msg: "Welcome!",
        examples: gearzonedb
      });
    });
  });

// post route goes here
// gets data from form and enters it into database
// EI & RM

//
  // load page for thank you and to show them their hat
  // get current Date, compare to created at date, decide what hat they are getting
  app.get("/hat", function(req, res) {
    db.Hat.findOne({ where: { id: req.params.id } }).then(function(gearzonedb) {
      res.render("hats", {
        example: gearzonedb
      });
    });
  });

  //NP
//


  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
