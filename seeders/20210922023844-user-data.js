'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
    {name: 'Landon', created_at: new Date(), updated_at: new Date()},
    {name: 'Jordan', created_at: new Date(), updated_at: new Date()},
    {name: 'Darian', created_at: new Date(), updated_at: new Date()},
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
