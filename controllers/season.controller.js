const db = require("../models");
const Season = db.seasons;
const Team = db.teams;
const Op = db.Sequelize.Op;

// Create and Save a new Season
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
      res.status(400).send({
        message: "Name can not be empty!"
      });
      return;
    }
  
    // Create a Season
    const season = {
      name: req.body.name,
    };
  
    // Save Season in the database
    Season.create(season)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Season."
        });
      });
};

// Retrieve all Seasons from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Season.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving seasons."
      });
    });
};

// Retrieve all teams for a given season
exports.getTeams = (req, res) => {
  const id = req.params.id;
  Season.findAll({
    where: {id: id},
    include: [
      {model: Team }
    ] 
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving seasons."
      });
    });
};
