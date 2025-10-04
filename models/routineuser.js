'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class routineuser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      routineuser.belongsTo(models.user, {
        foreignKey: 'id_user',
        as: 'user'
      });
      routineuser.belongsTo(models.routine, {
        foreignKey: 'id_routine',
        as: 'routine'
      });
    }
  }
  routineuser.init({
    id_user: DataTypes.INTEGER,
    id_routine: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'routineuser',
  });
  return routineuser;
};