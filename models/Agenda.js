/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Agenda', {
    'idagenda': {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'data_consulta': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'Hora': {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "null"
    },
    'motivo': {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "null"
    },
    'Status': {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "null"
    },
    'Data_Pesq': {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "null"
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
    'Animal_idAnimal': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null",
      references: {
        model: 'Animal',
        key: 'idAnimal'
      }
    }
  }, {
    tableName: 'agenda',
    timestamp:false,
  });
};
