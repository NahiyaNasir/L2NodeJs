const fs = require("fs");



const logEntry1 = `\n ${new Date().toISOString()} user logged in\n`;
fs.appendFileSync("./app.log", logEntry1);

const logEntry2 = `${new Date().toISOString()} data fetched`;
fs.appendFileSync("./app.log", logEntry2);

console.log("task complete");