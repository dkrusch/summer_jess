// Required for CodeEval
var fs  = require("fs");

// Returns the beauty(the largest possible value) for a string by assigning a value of 26 to the most frequent character and 25 to the second most frequent character. The character value is multiplied by the number of occurences of that character, the summation of all the products for each character equals the beauty of the string.
var beautifulString = function(line) 
{
    // Make sure that the line is not null
    if (line) 
    {
        // Make sure there is no difference between the value of an uppercase letter and a lowercase letter
        var lowerCaseLine = line.toLowerCase();
        
        // Creates an object that will store the number of each character in a string
        var alphabet = {};
        
        // Adds a number to a character count or creates the character count if one isn't present
        for (var i = 0; i < lowerCaseLine.length; i++)
        {
            // Creates a variable to make code easier to change
            var character = lowerCaseLine[i] 
            
            // Adds 1 to a character count if the loop hits that character
            if (alphabet.hasOwnProperty(character))
            {
                alphabet[character]++;
            }
            
            // Adds a count of Character starting with 1 only if the character is alphabetical
            else if (character >= "a" && character <="z")
            {
                alphabet[character] = 1;
            }
        }
        // Holds the value of the string's beauty
        var stringBeauty = 0;
        
        // Holds the value a character will be assigned based on how frequently it occurs
        var charBeauty = 26;
        
        // If there are properties in the object(alphabet) runs a loop over the properties
        while (Object.keys(alphabet).length > 0)
        {
            // Gets the number and character of the most frequently occuring letter in the string
            
            // Holds how many times the most frequently occuring character occured
            var largestValue = 0;
            
            // Holds the most frequently occuring character
            var largestCharacter = null;
            for (var character in alphabet) 
            {
                if (alphabet.hasOwnProperty(character)) 
                {
                    if (alphabet[character] > largestValue)
                    {
                        largestValue = alphabet[character];
                        largestCharacter = character;
                    }
                }
                
            }
            // Adds the value of the most frequent characters times their value
            stringBeauty += largestValue * charBeauty;
            
            // Subtracts 1 from 26 so the next largest character gets the next largest value
            charBeauty--; 
            
            // The "delete" operator removes the largest character so the 
            // code can find the next largest character
            // Repeats until there are no characters left
            delete alphabet[largestCharacter];
        }
        
        // Returns the value of the string
        return stringBeauty;
    }
};

// Required for CodeEval for test cases
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) 
{
    console.log(beautifulString(line));
});