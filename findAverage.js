function findAverage(array) {
  if(array.length > 0){
    return (array.reduce((prev, curr) => prev + curr)/array.length)
  }
  else{
    return 0
  }
}

module.exports = findAverage;