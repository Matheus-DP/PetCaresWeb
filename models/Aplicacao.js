/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Aplicacao', {
    'idAplicacao': {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'Posologia': {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "null"
    },
    'dataAplicacao': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'Obs': {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "null"
    },
    'Medicamentos_idMedicamentos': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null",
      references: {
        model: 'Medicamentos',
        key: 'idMedicamentos'
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
    tableName: 'aplicacao',
    timestamp:false,
  });
};
