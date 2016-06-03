// Given a string, return a string made of the first 2 chars (if present),
// however include first char only if it is 'o' and include the second only
// if it is 'z', so 'ozymandias' yields 'oz'.

var startOz=function(str) 
{ 
  var result = "";
  if (str[0] === "o")
  {
    result = result + str[0];
  }
  if (str[1] === "z")
  {
    result = result + str[1];
  }
  
  return result;
}