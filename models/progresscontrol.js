'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class progresscontrol extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      progresscontrol.belongsTo(models.user, {
        foreignKey: 'id_user',
        as: 'user'
      });
    }
  }
  progresscontrol.init({
    date_completion: DataTypes.DATE,
    peso: DataTypes.DECIMAL,
    waist: DataTypes.DECIMAL,
    hip: DataTypes.DECIMAL,
    right_thigh: DataTypes.DECIMAL,
    left_thigh: DataTypes.DECIMAL,
    right_arm: DataTypes.DECIMAL,
    left_arm: DataTypes.DECIMAL,
    right_forearm: DataTypes.DECIMAL,
    left_forearm: DataTypes.DECIMAL,
    right_calf: DataTypes.DECIMAL,
    left_calf: DataTypes.DECIMAL,
    medical_examination: DataTypes.STRING,
    observations: DataTypes.TEXT,
    exam_date: DataTypes.DATE,
    id_user: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'progresscontrol',
  });
  return progresscontrol;
};