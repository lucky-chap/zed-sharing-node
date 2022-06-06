// MySQL pluralizes the model names, so AdjectiveList will be adjectivelists in the database

'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const fs = require('fs');
    const data = fs.readFileSync('./seeders/seed_data/english-adjectives.txt', 'utf-8').split('\n');
    let seedData = [];
    data.forEach(adjective => {
      seedData.push({
        word: adjective,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    });
    await queryInterface.bulkInsert('adjectivelists', seedData, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('adjectivelists', null, {});
  },
};
