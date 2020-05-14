const db = require("../models");

// Defining methods for the bizController
module.exports = {
  findAll: function(req, res) {
    db.Business
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    console.log("findbyId")
    db.Business
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByName: function(req, res) {
    console.log("findbyName")
    db.Business
      .find({ bizname: { $regex: req.params.name, $options: "si" } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByLatLng: function(req, res) {
    console.log("finding by radius")
    // get lat lng from params
    db.Business
    .find({ "geometry.location.lat": {$lt: req.params.lat + .2, $gt: req.params.lat - .2}})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
    // where object lookig for { geometry:{location:{lat: {$gt: lat - .2}}}}
    // and lat < lat +.2, and lng > ln -.2, and lng < lng + .2
  },
  create: function(req, res) {
    db.Business
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Business
      .findOneAndUpdate({ _id: req.params.id }, req.body, {new: true})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Business
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};