// Required for CodeEval
var fs  = require("fs");

// Takes the total amount of candy got by the children and divides it evenly amongst them
var countCandies = function(line) 
{
    // Defines candyAmount so it can be returned outside the if statement
    var candyAmount = null;
    // Make sure that the line is not null
    if (line) 
    {
        
        // Holds the characters representing the different variables (vampire, zombie, witch, house)
        var characters = ["v","z","w","h"];
        
        // An object that holds the values of each variable 
        var counter = {};
        
        // Splits the line into the names of the variables and their values (Vampire: 1)
        var splitLine = line.split(",");
        
        // Loops over the array splitLine and takes the values of each variable and assigns them to their corresponding character
        for (var i = 0; i < splitLine.length; i++)
        {
            
            // Puts the number value from splitLine[i] into characters using an expression
            counter[characters[i]] = parseInt(splitLine[i].replace(/\D/g,""), 10);
        }
        
        // Gets the total number of candies and divides by the total number of children
        candyAmount = (((counter["v"] * 3) + (counter["z"] * 4) + (counter["w"] * 5)) * counter["h"]) / (counter["v"] + counter["z"] + counter["w"]);
    }  
    return Math.floor(candyAmount);
};

// Required for CodeEval for test cases
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) 
{
    console.log(countCandies(line));
});