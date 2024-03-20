/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Clinica', {
    'idclinica': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'nomeClinica': {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "null"
    },
    'numCnpj': {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "null"
    },
    'Especialidades': {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "null"
    },
    'Endereco': {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "null"
    },
    'Numero': {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "null"
    },
    'Complemento': {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "null"
    },
    'dsBairro': {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "null"
    },
    'numCep': {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "null"
    },
    'Cidade': {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "null"
    },
    'dsUF': {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "null"
    },
    'Email': {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "null"
    },
    'numTelefone': {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'clinica',
    timestamp:false,
  });
};
