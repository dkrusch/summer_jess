// Required for codeval
var fs  = require("fs");

// Capitalizes the first letter of every word in a string
var capitalized = function(line) 
{
    if (line) 
    {
        // Splits the line into individual words
        var words = line.split(" ");
        
        // Loops over all the words in the string
        for (var i = 0; i < words.length; i++)
        {
            // Defines word as a word in the string
            var word = words[i];
            
            // If word is a valid word
            if (word && word.length > 0)
            {
                // Capitalizes the first letter in the word and adds the rest of the word to it changes the word in words to match
                words[i] = word[0].toUpperCase() + word.substring(1, word.length);
            }
        }
        
        // Joins the words in "words" into a string
        console.log(words.join(" "));
    }
};
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    capitalized(line);
});

