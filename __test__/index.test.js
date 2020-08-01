const fs = require('fs');
const clicks = JSON.parse(fs.readFileSync('./clicks.json'));

const {reduceClicksList, getClickHour, getMaxEntriesByIp} = require('../app/reduceClicksList')
const originalListFixture = require('./fixtures/originalListFixture.json')
const maxEntriesByIpFixture = require('./fixtures/maxEntriesByIpFixture.json')
const {timestamp} = require('./fixtures/timestamp')
const {MAX_CLICKS_BY_IP} = require('../app/config')

describe('Given an array of clicks', () => {
  test('Should get its timestamp and return its numeric hour value', () => {
    expect(getClickHour(timestamp)).toBe(2)
  })

  test.only('Should return the max list of clicks by IP', () => {
    expect(getMaxEntriesByIp(clicks)).toStrictEqual(maxEntriesByIpFixture)
  })

  test('Should return the same list', () => {
    expect(reduceClicksList(clicks)).toStrictEqual(originalListFixture)
  })
})