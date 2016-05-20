// Given a string, return a new string where 'not' has been added to the front.
// However, if the string already begins with 'not', return the string unchanged.
// Note: use .equals() to compare 2 strings.

var notString=function(str) 
{ 
    if (str.substring(0,3) != "not")
    {
	    return ("not " + str);
    }
	else
    {
        return (str);
    }
}
