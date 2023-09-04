function getStudentsWithNamesAndTopNotes(values) {
  for(let i = 0; i < values.length;i++){
    if(values[i].notes.length == 0){
      values[i].notes = 0;
    }else{let largest = Math.max.apply(Math,values[i].notes)
    values[i].notes = largest;}
    
}
  
  
  let str = JSON.stringify(values);
  str = str.replace(/notes/g, 'topNote');
  object = JSON.parse(str);
  return object;
}



module.exports = getStudentsWithNamesAndTopNotes;
