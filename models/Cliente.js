/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Cliente', {
    'idProprietario': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'nomeProprietario': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'RG': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null",
      unique: true
    },
    'CPF': {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "null",
      unique: true
    },
    'Endereco': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null",
      unique: true
    },
    'NumeroEndereco': {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "null"
    },
    'Bairro': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'TelFixo': {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "null",
      unique: true
    },
    'Celular': {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "null",
      unique: true
    },
    'convenio_idconvenio': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null",
      references: {
        model: 'Convenio',
        key: 'idconvenio'
      }
    },
    'cidade': {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "null"
    },
    'Cep': {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "null"
    },
    'dataNasc': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'email': {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'cliente',
    timestamp:false,
  });
};
