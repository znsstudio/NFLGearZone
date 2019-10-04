// from template code
"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || "development";
var config = require(__dirname + "/../config/config.json")[env];
var db = {};

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(
    config.database,
    config.username,
    process.env.password,
    config
  );
}

fs.readdirSync(__dirname)
  .filter(function (file) {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach(function (file) {
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function (modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// creating title, image, and team ID for hats
// 3 hats per team (simulating a 3 month subscription, can add more later on)
let hats = [{
    title: "Distressed Bears Hat",
    image: "/images/Bears/B1.jpeg",
    team:"Chicago Bears"
  },
  {
    title: "Classic Bears Hat",
    image: "/images/Bears/B3.jpeg",
    team:"Chicago Bears"
  },
  {
    title: "Navy Bears Hat",
    image: "/images/Bears/B3.jpeg",
    team:"Chicago Bears"
  },
  {
    title: "Orange Browns Hat",
    image: "/images/Browns/BR1.jpeg",
    team:"Cleveland Browns"
  },
  {
    title: "Distressed Browns Hat",
    image: "/images/Browns/BR2.jpeg",
    team:"Cleveland Browns"
  },
  {
    title: "Big Letters Browns Hat",
    image: "/images/Browns/BR3.jpeg",
    team:"Cleveland Browns"
  },
  {
    title: "Rainbow Chargers Hat",
    image: "/images/Chargers/C1.jpeg",
    team:"Los Angeles Chargers"
  },
  {
    title: "Blue Chargers Hat",
    image: "/images/Chargers/C2.jpeg",
    team:"Los Angeles Chargers"
  },
  {
    title: "Black Chargers Hat",
    image: "/images/Chargers/C3.jpeg",
    team:"Los Angeles Chargers"
  },
  {
    title: "Distressed Chiefs Hat",
    image: "/images/Chiefs/CH1.jpeg",
    team:"Kansas City Chiefs"
  },
  {
    title: "Black Chiefs Hat",
    image: "/images/Chiefs/H.jpeg",
    team:"Kansas City Chiefs"
  },
  {
    title: "Red Chiefs Hat",
    image: "/images/Chiefs/CH3.jpeg",
    team:"Kansas City Chiefs"
  },
  {
    title: "Blue Colts Hat",
    image: "/images/Colts/CO1.jpeg",
    team:"Indianapolis Colts"
  },
  {
    title: "Black Colts Hat",
    image: "/images/Colts/CO2.jpeg",
    team:"Indianapolis Colts"
  },
  {
    title: "White Colts Hat",
    image: "/images/Colts/CO3.jpeg",
    team:"Indianapolis Colts"
  },
  {
    title: "Blue Cowboys Hat",
    image: "/images/Cowboys/COW1.jpeg",
    team:"Dallas Cowboys"
  },
  {
    title: "Black Cowboys Hat",
    image: "/images/Cowboys/COW2.jpeg",
    team:"Dallas Cowboys"
  },
  {
    title: "White Cowboys Hat",
    image: "/images/Cowboys/COW3.jpeg",
    team:"Dallas Cowboys"
  },
  {
    title: "Black Eagles Hat",
    image: "/images/Eagles/E1.jpeg",
    team:"Philadelphia Eagles"
  },
  {
    title: "Black and Green Eagles Hat",
    image: "/images/Eagles/E2.jpeg",
    team:"Philadelphia Eagles"
  },
  {
    title: "Black Denim Eagles Hat",
    image: "/images/Eagles/E3.jpeg",
    team:"Philadelphia Eagles"
  },
  {
    title: "White Patriots Hat",
    image: "/images/Patriots/P1.jpeg",
    team:"New England Patriots"
  },
  {
    title: "Navy Patriots Hat",
    image: "/images/Patriots/P2.jpeg",
    team:"New England Patriots"
  },
  {
    title: "White and Navy Patriots Hat",
    image: "/images/Patriots/P3.jpeg",
    team:"New England Patriots"
  },
  {
    title: "Blue and Yellow Rams Hat",
    image: "/images/Rams/R1.jpeg",
    team:"Los Angeles Rams"
  },
  {
    title: "Navy and Gold Rams Hat",
    image: "/images/Rams/R2.jpeg",
    team:"Los Angeles Rams"
  },
  {
    title: "Blue and White Rams Hat",
    image: "/images/Rams/R3.jpeg",
    team:"Los Angeles Rams"
  },
  {
    title: "Black Visor Saints Hat",
    image: "/images/Saints/S1.jpeg",
    team:"New Orleans Saints"
  },
  {
    title: "Black and Gold Saints Hat",
    image: "/images/Saints/S2.jpeg",
    team:"New Orleans Saints"
  },
  {
    title: "Black Saints Hat",
    image: "/images/Saints/S3.jpeg",
    team:"New Orleans Saints"
  }
];
for (let i = 0; i < hats.length; i++) {
  db.Hat.sync().then(function () {
    db.Team.findOne({where: {title: hats[i].team}}).then(function(data){
      delete hats[i].team;
      hats[i].TeamId = data.id;
      db.Hat.create(hats[i]);
    })
  })
}

module.exports = db;