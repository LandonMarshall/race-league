module.exports = (sequelize, Sequelize) => {
  const Team = sequelize.define("team", {
    name: {
      type: Sequelize.STRING,
      unique: "name_season_id"
    },
    season_id: {
      type: Sequelize.INTEGER,
      unique: "name_season_id",
      references: {
        model: 'seasons',
        key: 'id',
      }
    },
  }, {
    underscored: true,
  });
  
  return Team;
};