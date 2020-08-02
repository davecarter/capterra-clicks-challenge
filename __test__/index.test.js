const fs = require('fs');
const clicks = require('../clicks.json');
const finalOutputFixture = require('./fixtures/finalOutputFixture.json')

const {app} = require('../app')

describe('Given an array of clicks', () => {
  test('Should return a sorted list by IP with all business logic applied', () =>
    expect(app(clicks)).toStrictEqual(finalOutputFixture)
  )
})