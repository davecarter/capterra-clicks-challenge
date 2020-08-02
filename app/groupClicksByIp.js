const { MAX_CLICKS_BY_HR } = require('./config')

// build an object of clicks grouped by IP and based on its hour slot
const groupClicksByIp = data => 
  data.reduce((acc, {ip, timestamp, amount}) => {
    const hour = timestamp.split(" ")[1].split(":")[0];
    !acc[ip] && (acc[ip] = {});
    !acc[ip][hour] &&
      (acc[ip][hour] = { amount, timestamp });

    // insert the most expensive click by hour
    if (acc[ip][hour].amount < amount) {
      acc[ip][hour] = { amount, timestamp };
    }

    // when clicks at given IP have same amount in the same hour slot
    // only the earliest gets inserted
    if (
      acc[ip][hour].amount === amount &&
      Date.parse(acc[ip][hour].timestamp) > Date.parse(timestamp)
    ) {
      acc[ip][hour] = { amount, timestamp };
    }

    // when number of clicks by IP exceeds a maximum value any more entries
    // will be added
    acc[ip] = Object.fromEntries(
      Object.entries(acc[ip]).slice(0, MAX_CLICKS_BY_HR)
    );
  
    return acc;
  }, {});

module.exports = {
  groupClicksByIp
}