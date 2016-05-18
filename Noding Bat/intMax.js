// Given three int values, a b c, return the largest.

var intMax=function(a, b, c) 
{ 
	if (a > b && a > c)
    {
      return a;
    }
	else if (b > a && b > c)
    {
      return b;
    }
  	else 
    {
      return c;
    }
}