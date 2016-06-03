// Write a function with two boolean parameters, weekday and vacation.
// The function passes true if weekday is false,  
// and vacation is true.

var sleepIn = function(weekday, vacation)
{ 

	if (vacation === true)
    {
      return false;
    }
  	else if (weekday === vacation === false)
    {
      return true;
    }
  return false;
}
