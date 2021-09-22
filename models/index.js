const dbConfig = require("../config/db.config.js");
const { applyAssociations } = require('./associations');
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect,
});

const db = {};



db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./user.model.js")(sequelize, Sequelize);
db.seasons = require("./season.model.js")(sequelize, Sequelize);
db.teams = require("./team.model.js")(sequelize, Sequelize);
db.teamMembers = require("./teamMember.model.js")(sequelize, Sequelize);
db.races = require("./race.model.js")(sequelize, Sequelize);
db.raceTimes = require("./raceTime.model.js")(sequelize, Sequelize);

applyAssociations(sequelize);

module.exports = db;