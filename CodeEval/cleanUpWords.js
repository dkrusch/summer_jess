// Required for CodeEval
var fs  = require("fs");

// 
var cleanWords = function(line) 
{
    // Creates an array to hold multiple strings
    var stringArray = [];
    
    // Make sure that the line is not null
    if (line) 
    {
        // Removes non alphabetical characters and lower cases all alphabetical characters from the string
        var expression = /[a-z]+/g;
        stringArray = line.toLowerCase().match(expression);
    }  
    
    return stringArray;
};

// Required for CodeEval for test cases
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) 
{
    // Puts the array back into string form
    console.log(cleanWords(line).join(" "));
});