module.exports = (sequelize, Sequelize) => {
  const TeamMember = sequelize.define("team_member", {
    userId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'users',
        key: 'id',
      },
      field: 'user_id'
    },
    teamId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'teams',
        key: 'id',
      },
      field: 'team_id'
    },
  }, {underscored: true});

  return TeamMember;
}