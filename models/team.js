module.exports = function(sequelize, DataTypes) {
  var Team = sequelize.define("Team", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  Team.associate = function(models) {
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

  return Team;
};
