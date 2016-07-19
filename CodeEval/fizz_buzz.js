var fs  = require("fs");
var fizzBuzz = function(line) {
    if (line) {
        // Defines the paramaters of the function
        var variable = line.split(" ");
        var result = "";
        var currentChar = "";
        
        // Defines the numbers using the corresponding numbers in the "variable" array
        var x = variable[0];
        var y = variable[1];
        // Makes number into an integer
        var number = parseInt(variable[2]);
        
        // Loops over the number seeing if i is divisible by x or y
        for (var i = 1; i < number +1; i++)
        {
            currentChar = "";
            if (i % x === 0)
            {
                currentChar = "F";
            }
            if  (i % y === 0)
            {
                currentChar += "B";
            }
            // If i isn't divisible by x or y return i 
            if (currentChar == "")
            {
                currentChar = i
            }
            result += currentChar + " ";
        }
        console.log(result)
    }
};
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) 
{
    fizzBuzz(line);
});