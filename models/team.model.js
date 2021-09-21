module.exports = (sequelize, Sequelize) => {
  const Team = sequelize.define("team", {
    name: {
      type: Sequelize.STRING,
      unique: true
    },
    season_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'seasons',
        key: 'id',
      }
    },
  }, {underscored: true});

  return Team;
};