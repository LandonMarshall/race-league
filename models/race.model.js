module.exports = (sequelize, Sequelize) => {
  const Race = sequelize.define("race", {
    name: {
      type: Sequelize.STRING,
    },
    track: {
      type: Sequelize.STRING,
    },
    start_time: {
      type: Sequelize.DATE,
    },
    end_time: {
      type: Sequelize.DATE,
    },
    season_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'seasons',
        key: 'id',
      }
    },
  }, {underscored: true});

  return Race;
};