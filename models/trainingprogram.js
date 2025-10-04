'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class trainingprogram extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      trainingprogram.belongsTo(models.trainingcenter, {
        foreignKey: 'id_trainingcenter',
        as: 'trainingCenter'
      });
    }
  }
  trainingprogram.init({
    token_number: DataTypes.STRING,
    name: DataTypes.STRING,
    id_trainingcenter: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'trainingprogram',
  });
  return trainingprogram;
};