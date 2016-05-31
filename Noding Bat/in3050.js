// Given 2 int values, return true if they are both in the range 30..40 inclusive,
// or they are both in the range 40..50 inclusive.

var in3050 = function(a, b) {
  var inRange = function(num, lowRange, highRange) {
    return (num >= lowRange && num <= highRange);
  }
  var in3040 = function(num) {
    return inRange(num, 30, 40);
  }
  var in4050 = function(num) {
    return inRange(num, 40, 50);
  }

  if (in3040(a) && in3040(b)) {
    return true;
  }
  else if (in4050(a) && in4050(b)) {
    return true;
  }
  return false;
}