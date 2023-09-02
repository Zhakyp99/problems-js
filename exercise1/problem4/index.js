function makeTitleCase(str) {
  // Your code
  let strArray = str.split(' ');
  let strUpper = [];
    
  for(let i = 0; i < strArray.length; i++){
      strUpper.push(strArray[i].charAt(0).toUpperCase()+strArray[i].slice(1));
  }
  return strUpper.join(' ');
}



module.exports = makeTitleCase;
