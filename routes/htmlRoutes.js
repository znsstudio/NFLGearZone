var db = require("../models");

module.exports = function(app) {
  // load homepage for user
  app.get("/", function(req, res) {
    //Find all people and then return them as a promise
    db.Person.findAll({
      include: [db.Team]
    }).then(function(result) {
      res.render("index", {
        person: result
      });
    });
  });
  app.post("/person/new", function(req, res) {
    db.Person.create(req.body).then(function(result) {
      console.log(result);
      res.redirect("hat");
    });
  });

  // load second "thank you" page and display hat
  app.get("/hat/:id", function(req, res) {
    db.hat
      .findOne({
        where: {
          id: req.params.id
        }
      })
      .then(function(hat) {
        res.render("hat", {
          hat: hat
        });
      });
  });

  /*
  deleted code:  
   res.render("hat", {});
  */

  // render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
