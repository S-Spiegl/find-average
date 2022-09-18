const findAverage = require('./findAverage')

describe('findAverage', () => {
  it('calculates the average of an input', () => {
    expect(findAverage([1,1,1])).toEqual(1)
  })
})