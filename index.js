const fs = require('fs');

const clicks = JSON.parse(fs.readFileSync('./clicks.json'));      // gets original data
const {reduceClicksList} = require('./app/reduceClicksList.js')   // gets logic
const reducedClicksList = reduceClicksList(clicks)                // stores result
const outputFileData = JSON.stringify(reducedClicksList)          // formats output data

fs.writeFileSync('./resultset.json', outputFileData)              // sends formatted data to file
  
reduceClicksList(clicks)