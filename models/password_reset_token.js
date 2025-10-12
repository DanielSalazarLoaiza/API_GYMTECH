'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class password_reset_token extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      password_reset_token.belongsTo(models.user, {
        foreignKey: 'id_user',
        as: 'user'
      });
    }
  }
  password_reset_token.init({
    email: DataTypes.STRING,
    token: DataTypes.STRING,
    expires_at: DataTypes.DATE,
    used: DataTypes.BOOLEAN,
    id_user: DataTypes.INTEGER,
    codigo: DataTypes.STRING,
    fecha_expiracion: DataTypes.DATE,
    activo: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'password_reset_token',
  });
  return password_reset_token;
};