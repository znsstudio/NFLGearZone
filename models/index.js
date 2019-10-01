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
let hats = [{
    title: "Distressed Bears Hat",
    image: "/images/Bears/B1.jpeg",
    TeamId: 4
  },
  {
    title: "Classic Bears Hat",
    image: "/images/Bears/B3.jpeg",
    TeamId: 4
  },
  {
    title: "Navy Bears Hat",
    image: "/images/Bears/B3.jpeg",
    TeamId: 4
  },
  {
    title: "Orange Browns Hat",
    image: "/images/Browns/BR1.jpeg",
    TeamId: 9
  },
  {
    title: "Distressed Browns Hat",
    image: "/images/Browns/BR2.jpeg",
    TeamId: 9
  },
  {
    title: "Big Letters Browns Hat",
    image: "/images/Browns/BR3.jpeg",
    TeamId: 9
  },
  {
    title: "Rainbow Chargers Hat",
    image: "/images/Chargers/C1.jpeg",
    TeamId: 6
  },
  {
    title: "Blue Chargers Hat",
    image: "/images/Chargers/C2.jpeg",
    TeamId: 6
  },
  {
    title: "Black Chargers Hat",
    image: "/images/Chargers/C3.jpeg",
    TeamId: 6
  },
  {
    title: "Distressed Chiefs Hat",
    image: "/images/Chiefs/CH1.jpg",
    TeamId: 7
  },
  {
    title: "Black Chiefs Hat",
    image: "/images/Chiefs/H.jpg",
    TeamId: 7
  },
  {
    title: "Red Chiefs Hat",
    image: "/images/Chiefs/CH3.jpg",
    TeamId: 7
  },
  {
    title: "Blue Colts Hat",
    image: "/images/Colts/CO1.jpg",
    TeamId: 10
  },
  {
    title: "Black Colts Hat",
    image: "/images/Colts/CO2.jpg",
    TeamId: 10
  },
  {
    title: "White Colts Hat",
    image: "/images/Colts/CO3.jpg",
    TeamId: 10
  },
  {
    title: "Blue Cowboys Hat",
    image: "/images/Cowboys/COW1.jpg",
    TeamId: 2
  },
  {
    title: "Black Cowboys Hat",
    image: "/images/Cowboys/COW2.jpg",
    TeamId: 2
  },
  {
    title: "White Cowboys Hat",
    image: "/images/Cowboys/COW3.jpg",
    TeamId: 2
  },
  {
    title: "Black Eagles Hat",
    image: "/images/Eagles/E1.jpg",
    TeamId: 3
  },
  {
    title: "Black and Green Eagles Hat",
    image: "/images/Eagles/E2.jpg",
    TeamId: 3
  },
  {
    title: "Black Denim Eagles Hat",
    image: "/images/Eagles/E3.jpg",
    TeamId: 3
  },
  {
    title: "White Patriots Hat",
    image: "/images/Patriots/P1.jpg",
    TeamId: 5
  },
  {
    title: "Navy Patriots Hat",
    image: "/images/Patriots/P2.jpg",
    TeamId: 5
  },
  {
    title: "White and Navy Patriots Hat",
    image: "/images/Patriots/P3.jpg",
    TeamId: 5
  },
  {
    title: "Blue and Yellow Rams Hat",
    image: "/images/Rams/R1.jpg",
    TeamId: 1
  },
  {
    title: "Navy and Gold Rams Hat",
    image: "/images/Rams/R2.jpg",
    TeamId: 1
  },
  {
    title: "Blue and White Rams Hat",
    image: "/images/Rams/R3.jpg",
    TeamId: 1
  },
  {
    title: "Black Visor Saints Hat",
    image: "/images/Saints/S1.jpg",
    TeamId: 8
  },
  {
    title: "Black and Gold Saints Hat",
    image: "/images/Saints/S2.jpg",
    TeamId: 8
  },
  {
    title: "Black Saints Hat",
    image: "/images/Saints/S3.jpg",
    TeamId: 8
  }
];
for (let i = 0; i < hats.length; i++) {
  db.Hat.sync().then(function () {
    db.Hat.create(hats[i], {
      include: db.Team
    });
  })
}


module.exports = db;