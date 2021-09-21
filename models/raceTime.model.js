module.exports = (sequelize, Sequelize) => {
  const RaceTime = sequelize.define("race_time", {
    raceId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'races',
        key: 'id',
      },
      field: 'race_id'
    },
    userId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'users',
        key: 'id',
      },
      field: 'user_id'
    },
    lapTime: {
      type: Sequelize.DATE,
      field: 'lap_time'
    }
  }, {underscored: true});

  return RaceTime;
};