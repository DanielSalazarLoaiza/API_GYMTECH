'use strict';

const { sequelize } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(50)
      },
      picture: {
        type: Sequelize.STRING(255)
      },
      documentType: {
        type: Sequelize.STRING(2)
      },
      document: {
        type: Sequelize.STRING(20)
      },
      birthdate: {
        type: Sequelize.DATE
      },
      email: {
        type: Sequelize.STRING(100)
      },
      gender: {
        type: Sequelize.STRING(1)
      },
      status: {
        type: Sequelize.STRING(15)
      },
      phone: {
        type: Sequelize.STRING(15)
      },
      eps: {
        type: Sequelize.STRING(20)
      },
      blood_type: {
        type: Sequelize.STRING(3)
      },
      weight: {
        type: Sequelize.DECIMAL(10,0)
      },
      stature: {
        type: Sequelize.DECIMAL(10,0)
      },
      emergency_phone: {
        type: Sequelize.STRING(15)
      },
      password: {
        type: Sequelize.STRING(255)
      },
      observations: {
        type: Sequelize.TEXT
      },
      id_role: {
        type: Sequelize.INTEGER
      },
      id_group: {
        type: Sequelize.INTEGER
      },
      id_trainingcenter: {
        type: Sequelize.INTEGER
      },
      passwordResetToken: {
        allowNull: true,
        type: Sequelize.STRING
      },
      passwordResetExpires: {
        allowNull: true,
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};