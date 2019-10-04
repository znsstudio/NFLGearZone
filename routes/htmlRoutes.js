//require db
var db = require("../models");
var moment = require("moment");
module.exports = function (app) {
  // load homepage for user
  app.get("/", function (req, res) {
    // find all people and then return them as a promise
    db.Team.findAll({}).then(function (result) {
      res.render("index", {
        Team: result.slice(0, 10)
      });
    });
  });
  // post a new person
  app.post("/person/new", function (req, res) {
    db.Person.create(req.body).then(function (result) {
      res.json(result);
    });
  });
  // load second "thank you" page and display hat
  app.get("/hat/:id", function (req, res) {
    db.Person.findOne({
      where: {
        id: req.params.id
      },
      include: [{
        model: db.Team,
        include: [{
          model: db.Hat
        }]
      }]
    }).then(function (result) {
      // console.log(result);
      // console.log(result.dataValues.createdAt);
      // console.log(result.dataValues.Team.dataValues);
      // console.log(result.dataValues.Team.dataValues.Hats);
      let creationDate = moment(result.dataValues.createdAt);
      // console.log(creationDate.month());
      let today = moment();
      // console.log(today.month())
      let difference = Math.abs(today.month() - creationDate.month());
      difference = difference % 3;
      let hat = result.dataValues.Team.dataValues.Hats[difference].dataValues;
      let person = result.dataValues;
      let team = result.dataValues.Team.dataValues;
      console.log(hat, team, person)
      //select right hat
      res.render("hat", {
        Hat: hat,
        Person: person,
        Team: team
      });
    });
  });
  // render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};