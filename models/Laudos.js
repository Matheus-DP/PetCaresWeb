/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Laudos', {
    'idlaudos': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'dsLaudos': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'Data': {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.fn('current_timestamp'),
      comment: "null"
    },
    'consultas_idconsultas': {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      comment: "null",
      references: {
        model: 'Consultas',
        key: 'idconsultas'
      }
    }
  }, {
    tableName: 'laudos',
    timestamp:false,
  });
};
