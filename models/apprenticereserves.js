'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class apprenticereserves extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      apprenticereserves.belongsTo(models.user, {
        foreignKey: 'id_user',
        as: 'user'
      });
      apprenticereserves.belongsTo(models.calendar, {
        foreignKey: 'id_calendar',
        as: 'calendar'
      });
    }
  }
  apprenticereserves.init({
    id_user: DataTypes.INTEGER,
    id_calendar: DataTypes.INTEGER,
    entry_time: DataTypes.TIME,
    departure_time: DataTypes.TIME,
    reservation_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'apprenticereserves',
  });
  return apprenticereserves;
};