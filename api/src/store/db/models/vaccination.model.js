const { DataTypes, Model } = require('sequelize');
const { ANIMAL_TABLE } = require('./animals.model');

const VACCINATION_TABLE = 'vaccionations';

const VaccinationSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER
  },
  vacuna: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  description: {
    allowNull: true,
    type: DataTypes.TEXT,
  },
  animalId: {
    field: 'animal_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: ANIMAL_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  registeredAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'registered_at',
    defaultValue: DataTypes.NOW
  },
}

class Vaccination extends Model {
  static associate(models) {

  }

  static config(sequelize){
    return {
      sequelize,
      tableName: VACCINATION_TABLE,
      modelName: 'Animal',
      timestamp: false
    }
  }
}

module.exports = { VaccinationSchema, VACCINATION_TABLE, Vaccination }
