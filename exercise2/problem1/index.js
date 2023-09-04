function arrayOfMultiples(num, len) {
  // Your code
  let arr = [];
  for(let i = 1;i <= len;i++){
    arr.push(num*i);
  }
  return arr;
}

module.exports = arrayOfMultiples;
