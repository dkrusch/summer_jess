// Given three int values, a b c, return the largest.

var intMax=function(a, b, c) 
{ 
  var largest = a;
  var intArray = [a, b, c];
  for (var i = 0; i < intArray.length; i++)
  {
    if (intArray[i] > largest)
    {
      largest = intArray[i];
    }
  }
  return largest;
}