// Required for CodeEval
var fs  = require("fs");

// Takes a string of multiple timestamps and puts them in the order of largest time to smallest time.
var timeToTime = function(line) 
{
    if (line)
    {
        // Splits the string into individual time stamps
        var times = line.split(" ");
        
        // Holds the time string in seconds in an array
        var secTime = [];
        
        // Loops over the time stamps and seperates them into individual numbers and takes those numbers and converts them into seconds
        for (var i = 0; i < times.length; i++)
        {
            // Splits time stamps into numbers
            var splitTimes = times[i].split(":");
            
            // Takes those numbers and converts them into seconds
            var seconds = (parseInt(splitTimes[0],10) * 60 * 60) + (parseInt(splitTimes[1],10) * 60) + parseInt(splitTimes[2]);
            
            // Pushes both the original time stamp and the time stamp converted into seconds in an array using an object
            secTime.push({timeString: times[i], seconds: seconds});
        }
        
        // Sort takes an array and compares numbers and strings and sorts them from biggest to smallest
        var sortedTime = secTime.sort(sortFunction);
        
        // Returns the time stamps in order and trims any extra spaces
        return sortedTime.reduce(makeString, "").trim();
    }
};

// Takes the second values from the object and sorts them from biggest to smallest
var sortFunction = function(a, b)
{
    return b.seconds - a.seconds;
}

// Returns the time stamps in order from biggest to smallest
var makeString = function(result, value) 
{
    return result + " " + value.timeString;
}

// Required for CodeEval for test cases
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) 
{
    console.log(timeToTime(line));
});