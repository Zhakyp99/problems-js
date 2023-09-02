function removeABC(s) {
  // Your code
  const chars = {
  'a': '',
  'b': '',
  'c': ''
};
const a = "a";
const b = "b";
const c = "c";
if(s.includes(a) || s.includes(b) || s.includes(c)){
  s = s.replace(/[abc]/g, m => chars[m]);
return s;
} else{
  return null;
}

  
}
console.log(removeABC("This might be a bit hard")) // "This might e  it hrd"

console.log(removeABC("hello world!")) // null

console.log(removeABC("")) // null


module.exports = removeABC;
