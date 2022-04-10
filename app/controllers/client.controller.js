const db = require("../models");
const client = db.client;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.timezone) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  const newClientInfo = {
    name: req.body.name,
    country: req.body.country,
    timezone: req.body.timezone
  };
  const resultSuccess = {
    'success': true
  }
  client
    .create(newClientInfo)
    .then((data) => {
      resultSuccess['data'] = data
      res.send(resultSuccess);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the client.",
      });
    });
};

exports.findAll = (req, res) => {
  const resultSuccess = {
    'success': true
  }
  client.findAll()
    .then((data) => {
      resultSuccess['data'] = data
      res.send(resultSuccess);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving clients.",
      });
    });
};
