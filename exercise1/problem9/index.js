function isDisarium(num) {
  // Your code
  const res = String(num)
   .split("")
   .reduce((acc, val, ind) => {
      acc += Math.pow(+val, ind+1);
      return acc;
   }, 0);
   return res === num;
}

console.log(isDisarium(75)) // false
// 7^1 + 5^2 = 7 + 25 = 32

console.log(isDisarium(135)) // true
// 1^1 + 3^2 + 5^3 = 1 + 9 + 125 = 135

console.log(isDisarium(544)) // false

console.log(isDisarium(518)) // true

console.log(isDisarium(8)) // true

console.log(isDisarium(466)) // false

module.exports = isDisarium;
