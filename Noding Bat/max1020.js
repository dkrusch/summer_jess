// Given 2 positive int values, return the larger value that is in the range 10..20
// inclusive, or return 0 if neither is in that range.
var isBetween10And20 =function(value)
{
    return (value >= 10 && value <= 20);
}
var max1020=function(a, b) 
{ 
  	if (a > b && isBetween10And20(a))
    {
      return a;
    }
	else if (b > a && isBetween10And20(b))
    {
      return b;
    }
  	else 
    {
      return 0;
    }
}