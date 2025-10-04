'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "trainingcenters",
      [
        {
          name: "Industrial",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Automatización",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Comercio",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Cafetera",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('trainingcenters', null, {});
  }
};
