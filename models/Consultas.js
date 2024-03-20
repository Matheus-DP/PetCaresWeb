/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Consultas', {
    'idconsultas': {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'DataConsulta': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'Hora': {
      type: DataTypes.TIME,
      allowNull: true,
      comment: "null"
    },
    'status': {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "null"
    },
    'diagnostico': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    },
    'receita': {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "null"
    },
    'Animal_idAnimal': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null",
      references: {
        model: 'Animal',
        key: 'idAnimal'
      }
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
    'Tipo_Consultas_idTipo_Consultas': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null",
      references: {
        model: 'Tipo_Consultas',
        key: 'idTipo_Consultas'
      }
    },
    'Veterinario_idVeterinario': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null",
      references: {
        model: 'Veterinario',
        key: 'idVeterinario'
      }
    },
    'Valor': {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'consultas',
    timestamp:false,
  });
};
