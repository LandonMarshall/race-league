module.exports = app => {
  const season = require("../controllers/season.controller.js");

  var router = require("express").Router();

  // Create a new Season
  router.post("/", season.create);

  // Retrieve all Seasons
  router.get("/", season.findAll);

  // Retrieve all Teams in a Season
  router.get("/:id/teams", season.getTeams);

  app.use('/api/seasons', router);
};