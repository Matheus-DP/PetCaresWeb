/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Medicamentos', {
    'idMedicamentos': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'nomeMedicamento': {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "null"
    },
    'dsSubstancia': {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "null"
    },
    'dsPosologia': {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "null"
    },
    'dsLaboratorio': {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "null"
    },
    'dsContraIndicacao': {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "null"
    },
    'dsGenerico': {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'medicamentos',
    timestamp:false,
  });
};
