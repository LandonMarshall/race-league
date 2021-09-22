module.exports = (sequelize, Sequelize) => {
  const Season = sequelize.define("season", {
    name: {
      type: Sequelize.STRING,
      unique: true
    },
    startTime: {
      type: Sequelize.DATE,
      field: 'start_time'
    },
    endTime: {
      type: Sequelize.DATE,
      field: 'end_time'
    },
  }, {
    underscored: true,
    timestamps: false,
  });

  return Season;
};