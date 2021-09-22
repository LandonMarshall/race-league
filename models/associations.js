function applyAssociations(sequelize) {
  console.log(sequelize.models);
	const { team, season, user, team_member, race, race_time } = sequelize.models;
	season.hasMany(team); // Season HasMany Team
  season.hasMany(race); // Season HasMany Race
  race.hasMany(race_time); // Race HasMany RaceTime
  user.hasMany(race_time); // User HasMany RaceTime
  team.hasMany(team_member); // Team HasMany TeamMember
  user.belongsToMany(team, {through: team_member}); // user BelongsToMany team through the junction table team_member
	team.belongsTo(season, { // Team BelongsTo Season
    foreignKey: {
      name: 'season_id'
    }, 
  });
}

module.exports = { applyAssociations };