// MySQL pluralizes the model names, so AdjectiveIndex will be adjectiveindices in the database

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'adjectiveindices',
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
    await queryInterface.bulkDelete('adjectiveindices', null, {});
  },
};
