const express = require("express");
const cors = require("cors");
const cron = require("./cron");
const app = express();

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

app.use(express.json());  

app.use(express.urlencoded({ extended: true }));   

const db = require("./app/models");

db.sequelize.sync();

app.get("/", (req, res) => {
  res.json({ message: "Its Is Running" });
});

require("./app/routes/client.routes")(app);
require("./app/routes/user.routes")(app);

cron.start().then(console.log).catch(console.error);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
