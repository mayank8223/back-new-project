const db = require("../models");
const user = db.user;


exports.create = (req, res) => {
  if (!req.params.client_id) {
    res.status(400).send({
      message: "Client Id can not be empty!"
    });
    return;
  }
  const newUserDetails = {
    clientId: req.params.client_id,
    name: req.body.name,
    country: req.body.country,
    timezone: req.body.timezone,
    email: req.body.email
  };
  const resultSuccess = {
    'success': true
  }
  user.create(newUserDetails)
    .then(data => {
      resultSuccess['data'] = data
      res.send(resultSuccess);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User."
      });
    });
};

exports.findAllUsersByClientId = (req, res) => {
  const clientId = req.params.client_id;
  var condition = clientId ? { clientId:  `${clientId}` }  : null;
  const resultSuccess = {
    'success': true
  }
  user.findAll({ where: condition })
    .then(data => {
      resultSuccess['data'] = data
      res.send(resultSuccess);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    });
};

exports.findAll = (req, res) => {
  user.findAll({ raw: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    });
};

exports.findAllInternal = () => {
  return new Promise((resolve, reject) => {
    user.findAll({ raw: true })
      .then(data => {
        resolve(data);
      })
      .catch(err => {
        reject(err);
      });
  });
};
