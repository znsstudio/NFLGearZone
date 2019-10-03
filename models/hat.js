// hat table 
module.exports = function(sequelize, DataTypes) {
  var Hat = sequelize.define("Hat", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  //associations
  Hat.associate = function(models) {
    Hat.belongsTo(models.Team, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Hat;
};
