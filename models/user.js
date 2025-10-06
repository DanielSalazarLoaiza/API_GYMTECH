'use strict';
const bcrypt = require("bcryptjs");
const { Model } = require("sequelize");
// const {
//   Model,
//   where
// } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user.belongsTo(models.role, {
        foreignKey: 'id_role',
        as: 'rol'
      });
    }
  }
  user.init({
    name: DataTypes.STRING,
    picture: DataTypes.STRING,
    documentType: DataTypes.STRING,
    document: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    email: DataTypes.STRING,
    gender: DataTypes.STRING,
    status: DataTypes.STRING,
    phone: DataTypes.STRING,
    eps: DataTypes.STRING,
    blood_type: DataTypes.STRING,
    weight: DataTypes.DECIMAL,
    stature: DataTypes.DECIMAL,
    emergency_phone: DataTypes.STRING,
    password: DataTypes.STRING,
    observations: DataTypes.TEXT,
    id_role: DataTypes.INTEGER,
    id_group: DataTypes.INTEGER,
    id_trainingcenter: DataTypes.INTEGER,
    passwordResetToken: {type: DataTypes.STRING, allowNull: true},
    passwordResetExpires: {type: DataTypes.DATE, allowNull: true}
  }, {
    sequelize,
    modelName: 'user',
  });

  // Función login que permite autenticar al usuario segun email y password
  user.login = async function (email, password) {
    let foundUser = await user.findOne({
      where: {
        email: email
      },
      // Se específican los campos que se dean excluir de la consulta
      attributes: { exclude: ['picture' ,'birthdate', 'gender', 'status', 'eps', 'blood_type', 'weight', 'stature', 'emergency_phone', 'password', 'observations', 'id_group', 'id_trainingcenter'] },
      include: [
        {
          model: sequelize.models.role,
          as: "rol",
          attributes: {
            exclude: ['createdAt', 'updatedAt']
          },
        },
      ],
    });
    if (!foundUser) {
      return { status: 404, message: "Usuario inactivo o no encontrado" };
    }
    let valid = await foundUser.authenticatePassword(password);
    // si la contraseña es válida, se retorna el usuario, de lo contrario,
    // se retorna un mensaje de error
    return valid
      ? {
        status: 200,
        user: foundUser,
      }
      : {
        status: 401,
        message: "Usuario y/o contraseña inválidos"
      };
  };

  user.prototype.authenticatePassword = async function (password) {
    try {
      // Se compara la contraseña enviada por el usuario con la que está 
      // en la base de datos a través del método compare de bcrypt
      let valid = await bcrypt.compare(password, this.password);
      return valid;
    } catch (error) {
      return error;
    }
  };

  // Función que permite crear un usuario con contraseña encriptada a través de bcrypt
  user.beforeCreate(async function (user, options) {
    if (user.password) {
      // Se utiliza el método hash de bcrypt para encriptar la contraseña al crear el usuario 
      user.password = await bcrypt.hash(user.password, 10);
      return;
    }
  });

  // Función que permite actualizar un usuario con contraseña encriptada a través de bcrypt
  user.updatedPassword = async function (id, password) {
    let foundUser = await user.findByPk(id);
    if (!foundUser) {
      return { status: 404, message: "Usuario no encontrado" };
    }

    foundUser.password = await bcrypt.hash(password, 10);
    await foundUser.save();
    return foundUser;
  };

  return user;
};
