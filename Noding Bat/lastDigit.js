// Given two non-negative int values, return true if they have the same last digit,
// such as with 27 and 57. Note that the % 'mod' operator computes remainders,
// so 17 % 10 is 7.

var lastDigit=function(a ,b) 
{ 
   var a = a.toString();
   var b = b.toString();
   if (a.charAt(a.length -1) === b.charAt(b.length -1))
   {
     return true;
   }

    return false;
}