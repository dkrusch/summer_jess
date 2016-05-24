// Given a string, return a new string where the first and last chars
// have been exchanged.

var frontBack=function(str) 
{ 
  	if (str.length == 1 || str.length == 0)
    {
      	return (str);
    }
		
var middle = str.substring(1, str.length - 1) 
return (str.length -1 + middle + str.charAt(0));
};