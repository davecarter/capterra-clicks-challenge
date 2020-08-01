const timestamp = require("../__test__/fixtures/timestamp")

// Get click hour
const getClickHour = timestamp => 
  new Date(timestamp)
    .getHours()
    // .toString()
    // .padStart(2,'0')
    // .padEnd(8,':00:00')

const getMostExpensiveClick = data => 
  data.sort((a,b) => b.amount - a.amount)


// A custom sort helper function
const sortByKey = data => {
  let sortOrder = 1

  if(property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
  }

  return function (a,b) {
    sortOrder == -1
      ? b[property].localeCompare(a[property])
      : a[property].localeCompare(b[property])
    }        
}



let reduceClicksList = clicks => {
  let reducedClickListArr = []
  return clicks
}

module.exports = {
  getClickHour,
  getMaxEntriesByIp,
  reduceClicksList
}