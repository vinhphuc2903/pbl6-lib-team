function isWds(string) {    
  return string + " VND";
}

function convertStringToNumber(str, isVND = false) {    
  if( str == '' && typeof str == 'undefined')
    return "";
  var st = ""
  var  id = 1;
  for (var i = str.length - 1; i >= 0; i--) {
    st =  str[i] + st 
    if(id - 1 != 0 && id % 3 == 0 && id !== str.length)
    {
      st = '.' + st
    }
    id++;
  }
  if( isVND ) return st + " VND";
  return st
}

module.exports = isWds
module.exports = convertStringToNumber