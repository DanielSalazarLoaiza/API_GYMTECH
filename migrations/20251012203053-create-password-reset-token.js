'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('password_reset_tokens', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING(100)
      },
      token: {
        type: Sequelize.STRING(255)
      },
      expires_at: {
        type: Sequelize.DATE
      },
      used: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      id_user: {
        type: Sequelize.INTEGER
      },
      codigo: {
        type: Sequelize.STRING(10)
      },
      fecha_expiracion: {
        type: Sequelize.DATE
      },
      activo: {
        type: Sequelize.BOOLEAN
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('password_reset_tokens');
  }
};