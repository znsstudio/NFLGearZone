var db = require("../models");

module.exports = function(app) {
  //Make me a route that allows the creation of a new Hat
  app.post("/person/new", function(req, res) {
    db.Person.create(req.body).then(function(result) {
      res.json({
        person: result
      });
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
