/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Compra', {
    'idcompra': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'data_compra': {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.fn('current_timestamp'),
      comment: "null"
    },
    'data_pagamento': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'valor_total': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'valor_pago': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'compracol': {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "null"
    },
    'fornecedor_idfornecedor': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null",
      references: {
        model: 'Fornecedor',
        key: 'idfornecedor'
      }
    }
  }, {
    tableName: 'compra',
    timestamp:false,
  });
};
