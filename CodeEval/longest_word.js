// Required for CodeEval
var fs  = require("fs");

// Finds the longest word in a string
var longest = function(line) 
{
    if (line) 
    {
        // Seperates a string into words
        var words = line.split(" ");
        // Defines word
        var word = "";
        
        // loops over the words and compares their length
        for (var i = 0; i < words.length; i++)
        {
            // If word is less than the next word in the string that next word becomes word. Compares all words in the string
            if (word.length < words[i].length)
            {
                word = words[i];
            }
        }
        return(word);
    }
};

// Required for CodeEval for test cases
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) 
{
    console.log(longest(line));
});