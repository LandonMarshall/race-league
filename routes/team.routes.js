module.exports = app => {
  const team = require("../controllers/team.controller.js");

  var router = require("express").Router();

  // Create a new Team
  router.post("/", team.create);

  // Retrieve all Teams
  router.get("/", team.findAll);

  // Retrieve all published Teams
  router.get("/published", team.findAllPublished);

  // Retrieve a single Team with id
  router.get("/:id", team.findOne);

  // Update a Team with id
  router.put("/:id", team.update);

  // Delete a Team with id
  router.delete("/:id", team.delete);

  // Delete all Teams
  router.delete("/", team.deleteAll);

  app.use('/api/teams', router);
};