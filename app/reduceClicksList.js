const timestamp = require("../__test__/fixtures/timestamp")
const {MAX_CLICKS_BY_IP} = require('./config')

// Get click hour
const getClickHour = timestamp => 
  new Date(timestamp).getHours()

// A custom sort helper function
const sortByKey = key => {
  let sortOrder = 1

  if(key[0] === "-") {
      sortOrder = -1;
      key = key.substr(1);
  }

  return (a,b) => 
    sortOrder == -1
      ? b[key].localeCompare(a[key])
      : a[key].localeCompare(b[key])
}

const getMaxEntriesByIp = data => 
  data
    .sort(sortByKey('ip'))
    .slice(0, MAX_CLICKS_BY_IP)

module.exports = {
  getClickHour,
  getMaxEntriesByIp,
  sortByKey
}