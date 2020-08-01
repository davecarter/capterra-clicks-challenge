const fs = require('fs');
const clicks = JSON.parse(fs.readFileSync('./clicks.json'));

const {reduceClicksList, getClickHour, getMaxEntriesByIp, sortByKey} = require('../app/reduceClicksList')
const originalListFixture = require('./fixtures/originalListFixture.json')
const sortByKeyInputFixture = require('./fixtures/sortByKeyInputFixture.json')
const sortByKeyOutputFixture = require('./fixtures/sortByKeyOutputFixture.json')
const getMaxEntriesByIpInputFixture = require('./fixtures/getMaxEntriesByIpInputFixture.json')
const getMaxEntriesByIpOutputFixture = require('./fixtures/getMaxEntriesByIpOutputFixture.json')
const {timestamp} = require('./fixtures/timestamp')
const {MAX_CLICKS_BY_IP} = require('../app/config')

describe('Given an array of clicks', () => {
  test('Should get its timestamp and return its numeric hour value', () => {
    expect(getClickHour(timestamp))
      .toBe(2)
  })

  test('sortByKey function should sort by a given key an array of objects', () => {
    expect(sortByKeyInputFixture.sort(sortByKey('ip')))
      .toStrictEqual(sortByKeyOutputFixture)
  })

  test('getMaxEntriesByIp function should limit entries to a max value', () => {
    expect(getMaxEntriesByIp(getMaxEntriesByIpInputFixture))
      .toStrictEqual(getMaxEntriesByIpOutputFixture)
  })
})