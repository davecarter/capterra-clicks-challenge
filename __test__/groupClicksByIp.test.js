const clicks = require('../clicks.json')
const groupClicksByIpFixture = require('./fixtures/groupByIpFixture.json')

const {groupClicksByIp} = require('../app/groupClicksByIp')

describe('Given an array of Clicks', () => {
  test('Should transform this array into a grouped by IP object', () => 
    expect(groupClicksByIp(clicks)).toStrictEqual(groupClicksByIpFixture)
  )
})