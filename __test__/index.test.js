const fs = require('fs');
const clicks = JSON.parse(fs.readFileSync('./clicks.json'));

const {reduceClicksList} = require('../app/reduceClicksList')
const originalListFixture = require('./fixtures/originalListFixture.json')

describe('Given an array of clicks', () => {
  test('Should return the same list', () => {
    expect(reduceClicksList(clicks)).toStrictEqual(originalListFixture)
  })
})