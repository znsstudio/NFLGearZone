module.exports = function(sequelize, DataTypes) {
  var Person = sequelize.define("Person", {
    // Giving the Author model a name of type STRING
    firstname: DataTypes.STRING,
    lasttname: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING

    //  Can add password if we want
  });
  Person.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Person.belongsTo(models.Team, {
      onDelete: "cascade"
    });
  };
  return Person;
};
