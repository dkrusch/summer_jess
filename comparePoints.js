// Required for CodeEval
var fs  = require("fs");

// Takes 2 sets of coordinates OP(XY) and QR and returns the direction you need to travel from OP to get to QR (N, NE, SW, ect...), if OP equals QR returns here.
var comparePoints = function(line) 
{
    // Make sure that the line is not null
    if (line) 
    {
        // Splits the coordinates into individaul points and makes them into numbers
        var points = line.split(" ");
        var O = parseInt(points[0], 10);
        var P = parseInt(points[1], 10);
        var Q = parseInt(points[2], 10);
        var R = parseInt(points[3], 10);
        
        // Holds the direction needed to travel to get to QR
        var directions = "";
        
        // If R is greater than P travel north if R is less than P travel south
        if (P < R)
        {
            directions += "N";
        }
        else if (R < P)
        {
            directions += "S";
        }
        
        // If Q is greater than O travel east if Q less than O travel west
        if (O < Q)
        {
            directions += "E";
        }
        else if (Q < O)
        {
            directions += "W";
        }
        
        // If the respective x and y coordinates are equal with each other you have arrived
        if (directions == "")
        {
            directions = "here";
        }
        return directions;
    }   
};

// Required for CodeEval for test cases
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) 
{
    console.log(comparePoints(line));
});