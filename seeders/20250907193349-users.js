'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "administrador",
          picture: "https://pbs.twimg.com/media/Bhf_XUwCYAAfY2A.jpg",
          documentType: "CC",
          document: "123456789",
          birthdate: "2000-01-01",
          email: "administrador@gmail.com",
          gender: "M",
          status: "activo",
          phone: "1234567890",
          eps: "Salud Total",
          blood_type: "B+",
          weight: null,
          stature: null,
          emergency_phone: "0987654321",
          password: "administrador",
          observations: null,
          id_role: 1,
          id_group: null,
          id_trainingcenter: null
        },
        {
          name: "entrenador",
          picture: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2021/12/cyberpunk-2077-johnny-silverhand-keanu-reeves-2567861.jpg?tf=1200x1200",
          documentType: "CC",
          document: "123456788",
          birthdate: "2000-01-01",
          email: "entrenador@gmail.com",
          gender: "M",
          status: "activo",
          phone: "1234566890",
          eps: "Salud Total",
          blood_type: "B+",
          weight: null,
          stature: null,
          emergency_phone: "0987654331",
          password: "entrenador",
          observations: null,
          id_role: 2,
          id_group: null,
          id_trainingcenter: null
        },
        {
          name: "aprendiz",
          picture: "https://image-cdn.flowgpt.com/trans-images/1751467202353-8ed9cdc2-b149-484e-bedd-2f4bcd788e10.webp",
          documentType: "CC",
          document: "123446789",
          birthdate: "2000-01-01",
          email: "aprendiz@gmail.com",
          gender: "M",
          status: "activo",
          phone: "1234567390",
          eps: "Salud Total",
          blood_type: "B+",
          weight: "66",
          stature: "166",
          emergency_phone: "0987454321",
          password: "aprendiz",
          observations: null,
          id_role: 3,
          id_group: null,
          id_trainingcenter: null
        }
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
