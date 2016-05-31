// Given a string, return a new string where the last 3 chars are now in upper case.
// If the string has less than 3 chars, uppercase whatever is there. Note that
// str.toUpperCase() returns the uppercase version of a string.

var endUp = function(str) {
  // If the string is short, uppercase it all
  if (str.length < 3) {
    return str.toUpperCase();
  }
  
  // If string is longer than three characters, uppercase last three
  var lastThree = str.substring(str.length - 3, str.length);
  var upToLastThree = str.substring(0, str.length - 3);

  return upToLastThree + lastThree.toUpperCase();
}