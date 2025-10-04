'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "roles",
      [
        {
          name: "administrador",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "entrenador",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "aprendiz",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('roles', null, {});
  }
};
