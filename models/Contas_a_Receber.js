/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Contas_a_Receber', {
    'idContas a receber': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'data_pagamento': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'valor': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'qtd_parcelas': {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "null"
    },
    'Situacao': {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "null"
    },
    'tipo': {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "null"
    },
    'forma_pagamento_idforma_pagamento': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null",
      references: {
        model: 'Forma_Pagamento',
        key: 'idforma_pagamento'
      }
    },
    'consultas_idconsultas': {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      comment: "null",
      references: {
        model: 'Consultas',
        key: 'idconsultas'
      }
    },
    'venda_idvenda': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null",
      references: {
        model: 'Venda',
        key: 'idvenda'
      }
    },
    'Aplicacao_idAplicacao': {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      comment: "null",
      references: {
        model: 'Aplicacao',
        key: 'idAplicacao'
      }
    }
  }, {
    tableName: 'contas a receber',
    timestamp:false,
  });
};
