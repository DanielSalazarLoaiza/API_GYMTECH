'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('exerciseroutines', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      series: {
        type: Sequelize.STRING(5)
      },
      repetitions: {
        type: Sequelize.STRING(5)
      },
      weight: {
        type: Sequelize.STRING(45)
      },
      id_exercise: {
        type: Sequelize.INTEGER
      },
      id_routine: {
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
    await queryInterface.dropTable('exerciseroutines');
  }
};