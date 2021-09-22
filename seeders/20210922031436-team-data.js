'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('teams', [
    {name: 'Red Team', season_id: 1, created_at: new Date(), updated_at: new Date()},
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('teams', null, {});
  }
};
