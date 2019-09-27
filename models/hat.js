module.exports = function(sequelize, DataTypes) {
  var Hat = sequelize.define("Hat", {
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

  Hat.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Hat.hasMany(models.Person, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Hat;
};
