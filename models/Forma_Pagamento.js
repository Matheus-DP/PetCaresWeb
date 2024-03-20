/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Forma_Pagamento', {
    'idforma_pagamento': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'forma': {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'forma_pagamento',
    timestamp:false,
  });
};
