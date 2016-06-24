var fs  = require("fs");
var fizzBuzz = function(line) {
    if (line) {
        var variable = line.split(" ");
        var result = "";
        var currentChar = "";
        var x = variable[0];
        var y = variable[1];
        var number = parseInt(variable[2]);
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
            if (currentChar == "")
            {
                currentChar = i
            }
            result += currentChar + " ";
        }
        console.log(result)
    }
};
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    fizzBuzz(line);
});