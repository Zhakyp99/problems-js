function move(str) {
    let strOut='';
    for (var i = 0; i < str.length; i++) {
        if (96 < str.charCodeAt(i) && str.charCodeAt(i) < 123) {
            strOut += String.fromCharCode(str.charCodeAt(i) + 1);
        }
    }
    return strOut;
}
console.log(move("hello")) // "ifmmp"
module.exports = move;
