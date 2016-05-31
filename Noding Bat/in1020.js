// Given 2 int values, return true if either of them is in the range 10..20 inclusive.
var isBetween10And20 =function(value)
{
    return (value >= 10 && value <= 20);
}

var in1020=function(a, b) 
{ 
	return (isBetween10And20(a) || isBetween10And20(b));
}