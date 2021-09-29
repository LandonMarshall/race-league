module.exports = app => {
  const race = require("../controllers/race.controller.js");

  var router = require("express").Router();

  // Create a new Race
  router.post("/", race.create);

  // Retrieve all Races
  router.get("/", race.findAll);

  app.use('/api/races', router);
};