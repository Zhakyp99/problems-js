function afterNYears(obj, index) {
  for(let i in obj){
    obj[i]+= Math.abs(index);
  }
  return obj;
}

module.exports = afterNYears;
