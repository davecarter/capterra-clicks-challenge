const { MAX_CLICKS_BY_HR } = require('./config')

// build an object of clicks grouped by IP and based on its hour slot
const groupClicksByIp = data => 
  data.reduce((acc, row) => {
    const hour = row.timestamp.split(" ")[1].split(":")[0];
    !acc[row.ip] && (acc[row.ip] = {});
    !acc[row.ip][hour] &&
      (acc[row.ip][hour] = { amount: row.amount, timestamp: row.timestamp });

    // insert the most expensive click by hour
    if (acc[row.ip][hour].amount < row.amount) {
      acc[row.ip][hour] = { amount: row.amount, timestamp: row.timestamp };
    }

    // when clicks at given IP have same amount in the same hour slot
    // only the earliest gets inserted
    if (
      acc[row.ip][hour].amount === row.amount &&
      Date.parse(acc[row.ip][hour].timestamp) > Date.parse(row.timestamp)
    ) {
      acc[row.ip][hour] = { amount: row.amount, timestamp: row.timestamp };
    }

    // when number of clicks by IP exceeds a maximum value any more entries
    // will be added
    acc[row.ip] = Object.fromEntries(
      Object.entries(acc[row.ip]).slice(0, MAX_CLICKS_BY_HR)
    );
  
    return acc;
  }, {});

module.exports = {
  groupClicksByIp
}