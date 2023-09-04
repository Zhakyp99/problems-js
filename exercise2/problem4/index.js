function numInStr(arr) {
  return arr.filter(function (elem) {
        return elem.match(/\d/);
    })
}

module.exports = numInStr;
