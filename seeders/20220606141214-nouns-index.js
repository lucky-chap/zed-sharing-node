// MySQL pluralizes the model names, so NounIndex will be nounindices in the database
// But with Railway, it becomes NounIndices for the MySQL database

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'NounIndices',
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
    await queryInterface.bulkDelete('NounIndices', null, {});
  },
};
