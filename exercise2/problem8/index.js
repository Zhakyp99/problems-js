function isEqual(a,b) {
  // Your code
  if(Object.keys(a).length === 0 && Object.keys(b).length === 0){
    return true
  }else if(JSON.stringify(a) === JSON.stringify(b)){
    return true;
  } else {return Object.is(a,b);}
  
}

module.exports = isEqual;
