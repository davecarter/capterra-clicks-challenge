const fs = require('fs');
const clicks = JSON.parse(fs.readFileSync('./clicks.json'));

const {reduceClicksList, getClickHour, getMaxEntriesByIp, sortByKey} = require('../app/reduceClicksList')
const originalListFixture = require('./fixtures/originalListFixture.json')
const sortByKeyFixture = require('./fixtures/sortByKeyFixture.json')
const sortedByKeyFixture = require('./fixtures/sortedByKeyFixture.json')
const {timestamp} = require('./fixtures/timestamp')
const {MAX_CLICKS_BY_IP} = require('../app/config')

describe('Given an array of clicks', () => {
  test('Should get its timestamp and return its numeric hour value', () => {
    expect(getClickHour(timestamp)).toBe(2)
  })

  test('Should sort by a given key an array of objects', () => {
    expect(sortByKeyFixture.sort(sortByKey('ip'))).toStrictEqual(sortedByKeyFixture)
  })
})