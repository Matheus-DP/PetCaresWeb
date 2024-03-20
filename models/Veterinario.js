/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Veterinario', {
    'idVeterinario': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'NomeVeterinario': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    },
    'RG': {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "null"
    },
    'CPF': {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "null"
    },
    'CRMV': {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "null"
    },
    'Area': {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "null"
    },
    'especialidades': {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "null"
    },
    'Foto': {
      type: "LONGBLOB",
      allowNull: true,
      comment: "null"
    },
    'CEP': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'Endereco': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    },
    'Cidade': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    },
    'Estado': {
      type: DataTypes.STRING(2),
      allowNull: true,
      comment: "null"
    },
    'Usuario_idUsuario': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null",
      references: {
        model: 'Usuario',
        key: 'idUsuario'
      }
    }
  }, {
    tableName: 'veterinario',
    timestamp:false,
  });
};
