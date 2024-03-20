/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Usuario', {
    'idUsuario': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'Login': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    },
    'Senha': {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "null"
    },
    'Tipo': {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "null"
    },
    'Email': {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'usuario',
    timestamp:false,
  });
};
