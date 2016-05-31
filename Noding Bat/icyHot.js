// Given two temperatures, return true if one is less than 0 and 
// the other is greater than 100.

var icyHot=function(temp1, temp2) 
{ 
  
  var checkTemp = function(tempA, tempB)
  {
    return (tempA < 0 && tempB > 100);
  }
  return (checkTemp(temp1, temp2) || checkTemp(temp2, temp1));
}