var db = require("../models");

module.exports = function (app) {
  // load homepage for user
  app.get("/", function (req, res) {
    //Find all people and then return them as a promise
    db.Person.findAll({
      include: [db.Team]
    }).then(function (result) {
      res.render("index", {
        person: result
      });
    });
  });
  app.post("/person/new", function (req, res) {
    db.Person.create(req.body).then(function (result) {
      db.hat.findOne({ where: { hat: req.body.team } }).then(function (result) {
        res.render("hat", {
          hat: result
        });

        db.Post.update(
          req.body,
          {
            where: {
              id: req.body.id
            }
          }).then(function (dbPost) {
            res.json(dbPost);
          });

        console.log(result);
        res.redirect("hat");
      });
    });


    /*
   
   
       db.Post.update(
         req.body,
         {
           where: {
             id: req.body.id
           }
         }).then(function(dbPost) {
         res.json(dbPost);
       });
   
     // load second "thank you" page and display hat
     app.get("/hat/:image", function (req, res) {
       db.hat.findOne({ where: { image: req.params.id } }).then(function (hat) {
         res.render("hat", {
           hat: hat
         });
       });
     });
   
   
     
     deleted code:  
      res.render("hat", {});
     */

    // render 404 page for any unmatched routes
    app.get("*", function (req, res) {
      res.render("404");
    });
  };
