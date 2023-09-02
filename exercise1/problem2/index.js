function intWithinBounds(num,lower,upper) {
  // Your code
  if(num>lower && num < upper && Number.isInteger(num)){
    return true;
  } else{
    return false;
  }
}

module.exports = intWithinBounds;
