var db = require("../models");

module.exports = function(app) {
  // load homepage for user
  app.get("/", function(req, res) {
    res.render("index", {});
  });

  // load second "thank you" page and display hat
  app.get("/hat", function(req, res) {
    res.render("hat", {});
  });

  // render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
