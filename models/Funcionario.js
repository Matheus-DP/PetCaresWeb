/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Funcionario', {
    'idFuncioinario': {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'nome': {
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
    'CEP': {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "null"
    },
    'Endereco': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    },
    'NumeroEndereco': {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "null"
    },
    'Bairro': {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "null"
    },
    'TelFixo': {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "null"
    },
    'Celular': {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "null"
    },
    'Foto': {
      type: "LONGBLOB",
      allowNull: true,
      comment: "null"
    },
    'Crmv': {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "null"
    },
    'clinica_idclinica': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null",
      references: {
        model: 'Clinica',
        key: 'idclinica'
      }
    },
    'Cargo_idCargo': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null",
      references: {
        model: 'Cargo',
        key: 'idCargo'
      }
    },
    'Especialidade': {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "null"
    },
    'Data_contratacao': {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.fn('current_timestamp'),
      comment: "null"
    },
    'Data_nasc': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'Email': {
      type: DataTypes.STRING(255),
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
    tableName: 'funcionario',
    timestamp:false,
  });
};
