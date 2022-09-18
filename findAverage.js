function findAverage(array) {
  return (array.reduce((prev, curr) => prev + curr)/array.length)
}

module.exports = findAverage;