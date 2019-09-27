module.exports = function(sequelize, DataTypes) {
  var Person = sequelize.define("Person", {
    // Giving the Author model a name of type STRING
    name: DataTypes.STRING
  });

  Pesron.associate = function (models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Author.hasMany(models.team, {
      onDelete: "cascade"
    });
  };

  return Person;
};
