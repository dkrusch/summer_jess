var startOz=function(str) 
{ 
	if (str[0] === "o" && str[1] === "z")
    {
      return("oz")
    }
  	else if (str[0] !== "o" && str[1] === "z")
    {
      return("z")
    }
  	else if (str[0] === "o" && str [1] !== "z")
    {
      return("o")
    }
  	else
    {
      return("")
    }
}