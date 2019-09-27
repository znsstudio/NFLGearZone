module.exports = function(sequelize, DataTypes) {
  var Team = sequelize.define("Team", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  });

  Team.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Team.belongsTo(models.Person, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Team;
};
