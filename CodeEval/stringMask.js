// Required for CodeEval
var fs  = require("fs");

// Takes a word and a binary mask of the same length and capitalizes the letters in the word in the same positions as the 1's in the mask
var stringMask = function(line) 
{
    // Make sure that the line is not null
    if (line) 
    {
        // Splits the string into the individual word and mask
        var splitString = line.split(" ");
        
        // Defines word as the word in the string
        var word = splitString[0];
        
        // Defines binary as the binary mask in the string
        var binary = splitString[1];
        
        // Holds the contents of the new word and its capitalized letters
        var newWord = "";
        
        // If the binary mask contains a 1 a letter in the same position will be taken from word, capitalized, and added to newWord. If the loop hits a 0 a letter from word in the same position will be added to newWord uncapitalized
        for (var i = 0; i < binary.length; i++)
        {
            if (binary[i] == 1)
            {
                newWord += word[i].toUpperCase();
            }
            else
            {
                newWord += word[i];
            }
        }
        return(newWord);
    }   
};

// Required for CodeEval for test cases
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) 
{
    console.log(stringMask(line));
});