/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ItensCompra', {
    'idItensCompra': {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'compra_idcompra': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null",
      references: {
        model: 'Compra',
        key: 'idcompra'
      }
    },
    'Produtos_idProdutos': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null",
      references: {
        model: 'Produtos',
        key: 'idProdutos'
      }
    },
    'quantidade': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'valor': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'data_validade': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'itenscompra',
    timestamp:false,
  });
};
