function mapping(arr) {
  // Your code
let arr2 = [];
for(let i = 0;i < arr.length;i++){
    arr2.push(arr[i].toUpperCase());
}
let myObj = {}
arr.forEach((element, index) => {
  myObj[element] = arr2[index];});
return myObj;

}

module.exports = mapping;
