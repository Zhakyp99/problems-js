function insertWhitespace(s) {
  return  s.replace(/([A-Z])/g, ' $1').trim()
}



module.exports = insertWhitespace;
