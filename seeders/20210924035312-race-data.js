'use strict';
var dayjs = require('dayjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const start_time = dayjs();
    const end_time = start_time.add(14, 'day');
    return queryInterface.bulkInsert('races', [
    {
      name: 'Race 1',
      track: "Spa",
      season_id: 1,
      start_time: start_time.format('YYYY-MM-DDTHH:mm:ss'),
      end_time: end_time.format('YYYY-MM-DDTHH:mm:ss'),
      created_at: new Date(),
      updated_at: new Date()
    },
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('races', null, {});
  }
};
