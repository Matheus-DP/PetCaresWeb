/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Produtos', {
    'idProdutos': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'nome_produto': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
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
    },
    'unidade': {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "null"
    },
    'descricao': {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "null"
    },
    'cod_barras': {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "null"
    },
    'qtd_minima': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'produtos',
    timestamp:false,
  });
};
