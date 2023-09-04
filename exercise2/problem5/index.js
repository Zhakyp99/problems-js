function getBudgets(arr) {
  // Your code
  const sum = arr.reduce((acc, obj) => {
  return acc + obj.budget;
}, 0);
  return sum;
}



module.exports = getBudgets;
