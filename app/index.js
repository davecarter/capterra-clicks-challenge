const {groupClicksByIp} = require('./groupClicksByIp')
const {rebuildClicksObject} = require('./rebuildClicksObject')

const app = data => {
  let groupedClicks = groupClicksByIp(data)
  let output = rebuildClicksObject(groupedClicks)

  return output;
};

module.exports = {
  app
}
