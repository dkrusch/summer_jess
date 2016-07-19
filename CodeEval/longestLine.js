// Required for CodeEval
var fs  = require("fs");

// Takes a number (n) and mutiple lines of sentences and returns the first (n) longest sentences
var longestLines = function(lineSplit) 
{
    // Gets the number out of the string that determines the number of sentences printed.
    var lineNum = parseInt(lineSplit.splice(0, 1), 10);
    
    // Sorts the lines by largest to smallest
    lineSplit.sort(sortFunction);
    
    // Prints out the first (n) longest words in the string
    for (var i = 0; i < lineNum; i++)
    {
        console.log(lineSplit[i]);
    }
};

// Sorts words from biggest to smallest
var sortFunction = function(a, b)
{
    return b.length - a.length; 
}
// Required for CodeEval for test cases
var lineSplit = fs.readFileSync(process.argv[2]).toString().split('\n');
longestLines(lineSplit);
