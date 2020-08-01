const timestamp = require("../__test__/fixtures/timestamp")
const {MAX_CLICKS_BY_IP} = require('./config')

// Given a timestamp string will return its hour
const getClickHour = timestamp => 
  new Date(timestamp).getHours()

// A custom sort by key helper function
const sortByKey = key => {
  let sortOrder = 1

  // by prepending a "-" to the key
  // reverse sorting order will be applied
  if(key[0] === "-") {
      sortOrder = -1;
      key = key.substr(1);
  }

  return (a,b) => 
    sortOrder == -1
      ? b[key].localeCompare(a[key])
      : a[key].localeCompare(b[key])
}

// Given an array of object it will sort by `ip` key and return
// a max value of entries defined in config key MAX_CLICKS_BY_IP
const getMaxEntriesByIp = data => 
  data
    .sort(sortByKey('ip'))
    .slice(0, MAX_CLICKS_BY_IP)

module.exports = {
  getClickHour,
  getMaxEntriesByIp,
  sortByKey
}