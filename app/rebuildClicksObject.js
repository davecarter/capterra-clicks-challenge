const rebuildClicksObject = data => {
  // Gets an object with click based on its IP and sorted by hour
  // and returns a rebuilt clicks object with all logic applied
  const rebuiltObject = Object.entries(data).reduce((acc, [key, value]) => {
    Object.values(value).forEach(row => {
      acc.push({ ip: key, timestamp: row.timestamp, amount: row.amount });
    });
    return acc;
  }, []);

  return rebuiltObject
}

module.exports = {
  rebuildClicksObject
}