var db = require("../models");

module.exports = function(app) {
  // load homepage for user
  app.get("/", function(req, res) {
    db.Person.findAll({}).then(function(gearzonedb) {
      res.render("index", {
        msg: "Welcome!",
        examples: gearzonedb
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/hat", function(req, res) {
    db.Hat.findOne({ where: { id: req.params.id } }).then(function(gearzonedb) {
      res.render("hats", {
        example: gearzonedb
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
