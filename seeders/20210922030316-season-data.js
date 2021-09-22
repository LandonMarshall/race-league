'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('seasons', [
    {name: 'Season One', start_time: "2021-07-21", end_time: "2021-12-05"},
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('seasons', null, {});
  }
};
