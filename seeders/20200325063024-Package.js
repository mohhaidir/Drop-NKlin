'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Packages', [
      {
        name: 'Express',
        price: 12000,
        duration: 2,
        urlIMG: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Regular',
        price: 6000,
        duration: 5,
        urlIMG: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Santuy',
        price: 10000,
        duration: 7,
        urlIMG: null,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Packages', null, {});
  }
};
