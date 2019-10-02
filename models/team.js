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

  Team.associate = function (models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
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


  let teams = [{
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