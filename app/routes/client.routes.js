module.exports = app => {
  const clients = require("../controllers/client.controller.js");

  var router = require("express").Router();

  // Create a new Client
  router.post("/create-client", clients.create);

  // Retrieve all Clients
  router.get("/clients", clients.findAll);

  app.use('/api/v1', router);
};
