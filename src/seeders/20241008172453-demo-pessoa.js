'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('pessoas', [
      {
        nome: 'Ricardo Docente',
        email: 'ricardo@teste.com',
        cpf:'000000000000',
        ativo: true,
        role: 'docente',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Richard Docente',
        email: 'richard@teste.com',
        cpf:'11111111111',
        ativo: true,
        role: 'docente',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Luciana Estudante',
        email: 'luciana@teste.com',
        cpf:'22222222222',
        ativo: true,
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Fernanda Estudante',
        email: 'fernanda@teste.com',
        cpf:'33333333333',
        ativo: true,
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('pessoas', null, {});
  }
};
