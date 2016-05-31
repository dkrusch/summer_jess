// We'll say that a number is 'teen' if it is in the range 13..19 inclusive.
// Given 2 int values, return true if one or the other is teen, but not both

// Return true if either a or b is a teen
var loneTeen=function(a, b) 
{ 
  return (isTeen(a) || isTeen(b));
}

// Determines if a parameter is teen (between 13 and 19)
var isTeen =function(value)
{
    return (value >= 13 && value <= 19);
}

