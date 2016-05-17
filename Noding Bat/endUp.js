// Given a string, return a new string where the last 3 chars are now in upper case.
// If the string has less than 3 chars, uppercase whatever is there. Note that
// str.toUpperCase() returns the uppercase version of a string.

var endUp=function(str) 
{ 
  var threechar = str.substring(str.length - 3, str.length);
  var firstchar = str.substring(0, str.length - 3);
  
  // what this will do
  if (str.length < 3) 
  {
    var twochar = str.toUpperCase();
    return twochar;
  }
  else 
  {
    return firstchar + threechar.toUpperCase();
  } 
}