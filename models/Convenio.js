/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Convenio', {
    'idconvenio': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'NomeConvenio': {
      type: DataTypes.STRING(30),
      allowNull: false,
      comment: "null",
      unique: true
    },
    'DataInicio': {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "null"
    },
    'dsConvenio': {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "null",
      unique: true
    }
  }, {
    tableName: 'convenio',
    timestamp:false,
  });
};
