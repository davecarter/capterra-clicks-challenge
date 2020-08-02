const clicks = require('../clicks.json');
const groupByIpFixture = require('./fixtures/groupByIpFixture.json')
const finalOutputFixture = require('./fixtures/finalOutputFixture.json')

const {rebuildClicksObject} = require('../app/rebuildClicksObject')

describe('Given an object of grouped by IP clicks', () => {
  test('Should return a sorted list by most expensive click by hour for each IP', () =>
    expect(rebuildClicksObject(groupByIpFixture)).toStrictEqual(finalOutputFixture)
  )
})