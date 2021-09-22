const db = require("../models");
const Team = db.teams;
const Op = db.Sequelize.Op;

// Create and Save a new User
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Name can not be empty!"
    });
    return;
  }
  // Save Team in the database
  Team.create({
    name: req.body.name,
    season_id: req.body.season_id,
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Team."
      });
    });
};

// Retrieve all Teams from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Team.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving teams."
      });
    });
};

// Find a single Team with an id
exports.findOne = (req, res) => {
  
};

// Update a Team by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Team with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Team.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Team was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Team with id=${id}. Maybe Team was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Team with id=" + id
      });
    });
};

// Delete all Teams from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Teams
exports.findAllPublished = (req, res) => {
  
};