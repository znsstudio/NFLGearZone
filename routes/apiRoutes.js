var db = require("../models");

module.exports = function (app) {
  // get all person info
  app.get("/api/person", function (req, res) {
    db.Person.findAll({}).then(function (gearzonedb) {
      res.json(gearzonedb);
    });
  });

  // post?

  // create a new person
  app.get("/api/person", function (req, res) {
    db.Person.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      address: req.body.address
    }).then(function (gearzonedb) {
      res.json(gearzonedb);
    });
  });
  // Delete an example by id
  app.delete("/api/examples/:id", function (req, res) {
    db.Example.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbExample) {
      res.json(dbExample);
    });
  });
};
