// Given a string, return a string made of the first 2 chars (if present),
// however include first char only if it is 'o' and include the second only
// if it is 'z', so 'ozymandias' yields 'oz'.

var startOz=function(str) 
{ 
	if (str[0] === "o" && str[1] === "z")
    {
      return("oz");
    }
  	else if (str[0] !== "o" && str[1] === "z")
    {
      return("z");
    }
  	else if (str[0] === "o" && str [1] !== "z")
    {
      return("o");
    }
  	else
    {
      return("");
    }
}