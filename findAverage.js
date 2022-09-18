function findAverage(array) {
  return array.length > 0 ? (array.reduce((prev, curr) => prev + curr)/array.length) : 0
}

module.exports = findAverage;