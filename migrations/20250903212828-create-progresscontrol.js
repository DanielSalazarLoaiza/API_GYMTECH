'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('progresscontrols', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date_completion: {
        type: Sequelize.DATE
      },
      peso: {
        type: Sequelize.DECIMAL(10,0)
      },
      waist: {
        type: Sequelize.DECIMAL(10,0)
      },
      hip: {
        type: Sequelize.DECIMAL(10,0)
      },
      right_thigh: {
        type: Sequelize.DECIMAL(10,0)
      },
      left_thigh: {
        type: Sequelize.DECIMAL(10,0)
      },
      right_arm: {
        type: Sequelize.DECIMAL(10,0)
      },
      left_arm: {
        type: Sequelize.DECIMAL(10,0)
      },
      right_forearm: {
        type: Sequelize.DECIMAL(10,0)
      },
      left_forearm: {
        type: Sequelize.DECIMAL(10,0)
      },
      right_calf: {
        type: Sequelize.DECIMAL(10,0)
      },
      left_calf: {
        type: Sequelize.DECIMAL(10,0)
      },
      medical_examination: {
        type: Sequelize.STRING(255)
      },
      observations: {
        type: Sequelize.TEXT
      },
      exam_date: {
        type: Sequelize.DATE
      },
      id_user: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('progresscontrols');
  }
};