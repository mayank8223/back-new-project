module.exports = app => {
    const users = require("../controllers/user.controller.js");
  
    var router = require("express").Router();
  
    // Create a new User
    router.post("/create-user/:client_id", users.create);
  
    // Retrieve all Users
    router.get("/usersbyClientId/:client_id", users.findAllUsersByClientId);

    router.get("/users", users.findAll);

    app.use('/api/v1', router);
  };
  