
exports.min = function min (array) {
  let minArray;
    if (Array.isArray(array) && array!='') {
      minArray = Math.min.apply(null, array)
    } else {
      return 0;
    } 
    return minArray 
}

exports.max = function max (array) {
  let maxArray;
    if (Array.isArray(array) && array!="") {
        maxArray = Math.max.apply(null, array)
      } else {
        return 0;
      }
  return maxArray 
}

exports.avg = function avg (array) {
  let avgArray = 0;
    if(Array.isArray(array) && array!="") {
      for(let i=0; i < array.length; i++) {
        avgArray += array[i]
      }
    } else {
      return 0;
    }
  return avgArray / (array.length)
}
