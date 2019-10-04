// require database
var db = require("../models");

module.exports = function(app) {
  // route that allows the creation of a new person
  app.post("/person/new", function(req, res) {
    db.Person.create(req.body).then(function(result) {
      res.json({
        person: result
      });
    });
  });

  // delete a person by id
  app.delete("/api/person/:id", function(req, res) {
    db.Person.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(gearzonedb) {
      res.json(gearzonedb);
    });
  });
};
