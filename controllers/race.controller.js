const db = require("../models");
const Race = db.races;
const Op = db.Sequelize.Op;

// Create and Save a new Race
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
      res.status(400).send({
        message: "Name can not be empty!"
      });
      return;
    }
    if (!req.body.track) {
      res.status(400).send({
        message: "TrackR can not be empty!"
      });
      return;
    }
  
    // Save Race in the database
    Race.create({
      name: req.body.name,
      track: req.body.name,
    })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Race."
        });
      });
};

// Retrieve all Races from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Race.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving races."
      });
    });
};
