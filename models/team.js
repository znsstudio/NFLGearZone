//team table 
module.exports = function (sequelize, DataTypes) {
  var Team = sequelize.define("Team", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });
  //associations 
  Team.associate = function (models) {
    Team.hasMany(models.Person, {
      foreignKey: {
        allowNull: false
      }
    });
    Team.hasMany(models.Hat, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  // creating title for teams
  var teams = [{
      title: "Philadelphia Eagles"
    },
    {
      title: "Dallas Cowboys"
    },
    {
      title: "Chicago Bears"
    },
    {
      title: "Los Angeles Rams"
    },
    {
      title: "New England Patriots"
    },
    {
      title: "Los Angeles Chargers"
    },
    {
      title: "Kansas City Chiefs"
    },
    {
      title: "New Orleans Saints"
    },
    {
      title: "Cleveland Browns"
    },
    {
      title: "Indianapolis Colts"
    }
  ];
  for (let i = 0; i < teams.length; i++) {
    Team.sync().then(function () {
      Team.create(teams[i])
      // force=true;
    });
  }

  return Team;
};