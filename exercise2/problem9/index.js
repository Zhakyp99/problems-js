function duplicateNums(arr) {
  // Your code
  return arr.sort(function(num1, num2){return num1 - num2}).filter((currentValue, currentIndex) =>
         arr.indexOf(currentValue) !== currentIndex);;
}




module.exports = duplicateNums;
