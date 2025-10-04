'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class group extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      group.belongsTo(models.trainingprogram, {
        foreignKey: 'id_trainingprogram',
        as: 'trainingProgram'
      });
    }
  }
  group.init({
    token_number: DataTypes.STRING,
    number_aprenttices: DataTypes.INTEGER,
    status: DataTypes.STRING,
    star_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    id_trainingprogram: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'group',
  });
  return group;
};