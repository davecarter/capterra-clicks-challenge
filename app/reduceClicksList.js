const MAX_CLICK_BY_IP = 10;

// Get click hour
const getClickHour = timestamp => new Date(timestamp).getHours()

let reduceClicksList = clicks => {
  return clicks
}

module.exports = {
  reduceClicksList
}