const cron = require("node-cron");
const express = require("express");
const fs = require("fs");

app = express();
// cron.schedule("* * * * *", function() {
//     console.log("running a task every minute");
//   });
var CronJob = require('cron').CronJob;
new CronJob('* * * * * *', function() {
  console.log('You will see this message every second');
}, null, true, 'America/Los_Angeles');
  app.listen(3128);