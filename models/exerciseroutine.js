'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class exerciseroutine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      exerciseroutine.belongsTo(models.exercise, {
        foreignKey: 'id_exercise',
        as: 'exercise'
      });
      exerciseroutine.belongsTo(models.routine, {
        foreignKey: 'id_routine',
        as: 'routine'
      });
    }
  }
  exerciseroutine.init({
    series: DataTypes.STRING,
    repetitions: DataTypes.STRING,
    weight: DataTypes.STRING,
    id_exercise: DataTypes.INTEGER,
    id_routine: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'exerciseroutine',
  });
  return exerciseroutine;
};