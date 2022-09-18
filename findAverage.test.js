const findAverage = require('./findAverage')

describe('findAverage', () => {
  it('calculates the average of an input', () => {
    expect(findAverage([1,1,1])).toEqual(1)
  })
  it('calculates can return a float', () => {
    expect(findAverage([1,2,3,4])).toEqual(2.5)
  })
})