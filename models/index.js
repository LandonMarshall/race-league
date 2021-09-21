const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
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

module.exports = db;