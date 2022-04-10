# back-new-project
Requirement
You need to make a node Js application using a single database (any). The database is
required to have a few international clients at multiple locations and every client should
have multiple users in different locations. You need to send “Good Morning Email” to all the
users every morning at 8 AM according to different time zones of the users.


For creating Database I have used mySql you can look for the table in models folder

To fetch data from database I have used sequelize you can check the controller folder for this

To send msg every user at 08:00AM morning cron is used which will in every XX:00 or XX:30 which will cover all timezone
