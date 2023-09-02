function numOfDigits(int) {
  // Your code
  if(int >= 0){
    return int.toString().length;
  }else{
    let a = Math.abs(int);
    return a.toString().length;
  }
  
}


module.exports = numOfDigits;
