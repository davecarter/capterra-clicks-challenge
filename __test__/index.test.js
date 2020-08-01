const fs = require('fs');
const clicks = JSON.parse(fs.readFileSync('./clicks.json'));

const {reduceClicksList, getClickHour} = require('../app/reduceClicksList')
const originalListFixture = require('./fixtures/originalListFixture.json')
const {timestamp} = require('./fixtures/timestamp')

describe('Given an array of clicks', () => {
  test('Given a timestamp string should get its numeric hour value', () => {
    expect(getClickHour(timestamp)).toBe(2)
  })

  test('Should return the same list', () => {
    expect(reduceClicksList(clicks)).toStrictEqual(originalListFixture)
  })
})