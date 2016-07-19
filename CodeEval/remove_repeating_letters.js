// Required for CodeEval
var fs  = require("fs");

// Removes any repeating characters in a string
var removeRepeatingChars = function(line) 
{
    // Make sure that the line is not null
    if (line) 
    {
        // Gets the first character in the string
        var sentence = line.substring(0,1);
        
        // Adds only non repeated values to the string.
        for (var i = 1; i < line.length; i++)
        {
            // If the last character doesn't equal the next character in the string add it to the new sentence
            if (sentence[sentence.length - 1] != line[i])
            {
                sentence += line[i];
            }
        }
        console.log(sentence)
    }
};

// Required for CodeEval for test cases
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    removeRepeatingChars(line);
});