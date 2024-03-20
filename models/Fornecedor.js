/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Fornecedor', {
    'idfornecedor': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'nome_fantasia': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    },
    'cnpj': {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "null"
    },
    'tel_fixo': {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "null"
    },
    'tel_celular': {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "null"
    },
    'razao_social': {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "null"
    },
    'cidade': {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "null"
    },
    'estado': {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'fornecedor',
    timestamp:false,
  });
};
