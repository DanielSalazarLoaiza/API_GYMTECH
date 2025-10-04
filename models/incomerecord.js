'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class incomerecord extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      incomerecord.belongsTo(models.user, {
        foreignKey: 'id_user',
        as: 'user'
      });
      incomerecord.belongsTo(models.activity, {
        foreignKey: 'id_activity',
        as: 'activity'
      });
    }
  }
  incomerecord.init({
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    id_user: DataTypes.INTEGER,
    id_activity: DataTypes.INTEGER,
    id_trainer: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'incomerecord',
  });
  return incomerecord;
};