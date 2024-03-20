/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Logs', {
    'idLogs': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'data': {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.fn('current_timestamp'),
      comment: "null"
    },
    'Acao': {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "null"
    },
    'Usuario_idUsuario': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null",
      references: {
        model: 'Usuario',
        key: 'idUsuario'
      }
    }
  }, {
    tableName: 'logs',
    timestamp:false,
  });
};
