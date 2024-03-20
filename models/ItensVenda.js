/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ItensVenda', {
    'idItensVenda': {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'venda_idvenda': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null",
      references: {
        model: 'Venda',
        key: 'idvenda'
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
    'valor': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'quantidade': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'itensvenda',
    timestamp:false,
  });
};
