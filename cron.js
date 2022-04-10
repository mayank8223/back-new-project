const cron = require("node-cron");
const user = require("./app/controllers/user.controller");
const moment = require("moment-timezone")

async function start() {
  cron.schedule("0,30 * * * *", async () => {
    let userInfo = await user.findAllInternal();
    for (let i = 0; i < userInfo.length; i++) {
      let timezone = userInfo[i].timezone;
      let currentTime = moment.tz(timezone).format("HH:mm");
      console.log(currentTime);
      if (currentTime === "08:00") {
        // .env
        let transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: "mayank.sah.35600@gmail.com", // .env
            pass: "Mayanktest12@", // .env
          },
        });

        let mailOptions = {
          from: "mayank.sahu82239@gmail.com", // .env
          to: "Mayanksahu78@gmail.com", // .env
          subject: userInfo[i].email,
          html: `<body>'Good Morning its 08:00AM'</body>`,
        };

        transporter.sendMail(mailOptions, (err, info) => {
          if (err) {
            console.log(err);
          } else {
            console.log(info);
          }
        });
      }
    }
  });
}

module.exports = { start };
