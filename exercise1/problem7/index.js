function isPrimitive(data) {
   if(data === Object(data)){
    return false;
  }else{
    return true;
  }
}


module.exports = isPrimitive;
