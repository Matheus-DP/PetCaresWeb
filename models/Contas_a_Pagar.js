/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Contas_a_Pagar', {
    'idcontas_a_pagar': {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'Valor': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'grupo': {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "null"
    },
    'vencimento': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'detalhes': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    },
    'situacao': {
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
    },
    'data_pagamento': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'valor_pago': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'contas_a_pagar',
    timestamp:false,
  });
};
