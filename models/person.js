// person table
module.exports = function(sequelize, DataTypes) {
  var Person = sequelize.define("Person", {
    // Giving the Author model a name of type STRING
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING
    //  Can add password if we want
  });
  //associations
  Person.associate = function(models) {
    Person.belongsTo(models.Team, {
      onDelete: "cascade"
    });
  };
  return Person;
};
