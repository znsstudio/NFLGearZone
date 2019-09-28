module.exports = function (sequelize, DataTypes) {

    var Month = sequelize.define("Month", {

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

    Month.associate = function (models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        Month.hasMany(models.Person, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Month;
};
