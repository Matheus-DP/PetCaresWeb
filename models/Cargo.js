/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Cargo', {
    'idCargo': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'NomeCargo': {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "null"
    },
    'dsCargo': {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'cargo',
    timestamp:false,
  });
};
