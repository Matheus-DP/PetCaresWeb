/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Animal', {
    'idAnimal': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'NomeAnimal': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    },
    'DataNascimento': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'peso': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    },
    'sexo': {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "null"
    },
    'especie': {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "null"
    },
    'obito': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'pelo': {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "null"
    },
    'microchip': {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "null"
    },
    'raca': {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "null"
    },
    'Proprietario_idProprietario': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null",
      references: {
        model: 'Cliente',
        key: 'idProprietario'
      }
    },
    'Foto': {
      type: "LONGBLOB",
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'animal',
    timestamp:false,
  });
};
