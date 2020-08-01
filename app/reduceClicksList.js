const MAX_CLICKS_BY_IP = 10;

// Get click hour
const getClickHour = timestamp => new Date(timestamp).getHours()

// Return the number of entries limited by MAX_CLICKS_BY_IP constant
const getMaxEntriesByIp = data => {

}

let reduceClicksList = clicks => {
  let reducedClickListArr = []

}

module.exports = {
  reduceClicksList,
  getClickHour
}