/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Venda', {
    'idvenda': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'dataCompra': {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp'),
      comment: "null"
    },
    'desconto': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'valor_total': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'valor_final': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'cpf_cnpj': {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "null"
    },
    'Cliente_idProprietario': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null",
      references: {
        model: 'Cliente',
        key: 'idProprietario'
      }
    }
  }, {
    tableName: 'venda',
    timestamp:false,
  });
};
