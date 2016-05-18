// Given 2 positive int values, return the larger value that is in the range 10..20
// inclusive, or return 0 if neither is in that range.

var max1020=function(a, b) 
{ 
  	if (a > b && a <= 20 && a >= 10)
    {
      return a;
    }
	else if (b > a && b <= 20 && b >= 10)
    {
      return b;
    }
  	else 
    {
      return 0;
    }
}