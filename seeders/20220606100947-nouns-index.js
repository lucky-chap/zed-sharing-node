// MySQL pluralizes the model names, so NounIndex will be nounindices in the database

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'nounindices',
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
    await queryInterface.bulkDelete('nounindices', null, {});
  },
};
