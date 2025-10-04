'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class exercise extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      exercise.belongsTo(models.musclegroup, {
        foreignKey: 'id_musclegroup',
        as: 'musclegroup'
      });
    }
  }
  exercise.init({
    name: DataTypes.STRING,
    example: DataTypes.STRING,
    id_musclegroup: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'exercise',
  });
  return exercise;
};