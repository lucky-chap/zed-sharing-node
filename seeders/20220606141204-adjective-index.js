// MySQL pluralizes the model names, so AdjectiveIndex will be adjectiveindices in the database
// But with Railway, it becomes AdjectiveIndices for the MySQL database

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'AdjectiveIndices',
      [
        {
          currentIndex: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('AdjectiveIndices', null, {});
  },
};
