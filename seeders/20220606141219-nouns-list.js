// MySQL pluralizes the model names, so NounList will be nounlists in the database
// But with Railway, it becomes NounLists for the MySQL database

'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const fs = require('fs');
    const data = fs.readFileSync('./seeders/seed_data/english-nouns.txt', 'utf-8').split('\n');
    let seedData = [];
    data.forEach(adjective => {
      seedData.push({
        word: adjective,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    });
    await queryInterface.bulkInsert('NounLists', seedData, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('NounLists', null, {});
  },
};
