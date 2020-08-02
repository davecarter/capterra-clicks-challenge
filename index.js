const fs = require('fs');

const clicks = require('./clicks.json');                  // gets original data
const {app} = require('./app/index.js')                   // gets logic
const reducedClicksList = app(clicks)                     // stores result
const outputFileData = JSON.stringify(reducedClicksList)  // formats output data

fs.writeFileSync('./resultset.json', outputFileData)       // sends formatted data to file
  
app(clicks)