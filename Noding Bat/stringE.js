// Return true if the given string contains between 1 and 3 'e' chars.

var stringE=function(str)
{ 
  var eCount = 0;
  for (var i = 0; i < str.length; i++) 
  {
    if (str[i] == 'e')
    {
    	eCount++;
    }       
  }
  if (eCount >= 1 && eCount <= 3)
  {
  	return true;
  }
  else 
  {
  	return false;
  }
}