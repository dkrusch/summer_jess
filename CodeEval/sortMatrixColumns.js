// Required for CodeEval
var fs  = require("fs");

// Sorts columns in a matrix by the first row from smallest to largest. If the numbers in the first row are equal sort by the second row. etc...
var sortMatrixColumns = function(line) 
{
    // Creates the matrix to be sorted
    var matrix = [];
    
    // Creates the matrix of the sorted rows
    var matrixString = [];
    
    // If line is not null
    if (line)
    {
        // Splits the strings into rows
        var rows = line.split("|");
        console.log(rows.length)
        
        // Loops over the array "rows"
        for (var y = 0; y < rows.length; y++)
        {
            
            // Gets the individual numbers that make up the rows, trim removes excess spaces
            var elements = rows[y].trim().split(" ");
            
            // On the first loop matrix is made into a matrix by pushing arrays into it
            if (y === 0)
            {
                for (var x = 0; x < elements.length; x++)
                {
                    matrix.push([]);
                }
            }
            
            // Elements are put into an array with numbers from their columns 
            for (var x = 0; x < elements.length; x++)
            {
                matrix[x].push(parseInt(elements[x],10));
            }
            
        }
        
        // Sorts a the arrays in the matrix from smallest to largest from first to last
        matrix.sort(sortFunction);
        
        // Puts the sorted matrix back into its orginal string form
        matrix = matrix.join(" | ")
        // Removes commas from the string and replaces them with spaces using an expression
        matrix = matrix.replace(/\,/g," ");
        
        // Takes the sorted string and puts it into a matrix of rows instead of columns and re-stringifys it into the proper format using the same processes
        var matrixRows = matrix.split("|");
        for (var i = 0; i < matrixRows.length; i++)
        {
            var elements = matrixRows[i].trim().split(" ");
            if (i === 0)
            {
                for (var j = 0; j < elements.length; j++)
                {
                    matrixString.push([]);
                }
            }
            
            for (var j = 0; j < elements.length; j++)
            {
                matrixString[j].push(parseInt(elements[j],10));
            }
        }
        matrixString = matrixString.join(" | ")
        matrixString = matrixString.replace(/\,/g," ");
        
    }
    return matrixString;
};

// A sort function that sorts the columns from the first row and down, if the first row is equal and so on for all rows,from smallest to largest 
var compareElements = function(a, b, index) 
{
    // Stops infinite loops for a matrix with all equal numbers
    if (index >= a.length) 
    {
        return 0;
    }
    
    if (a[index] == b[index]) 
    {
        return compareElements(a, b, index + 1);
    }
    
    return a[index] - b[index];
}

// Calls compareElements with the proper parameters
var sortFunction = function(a,b)
{
    return compareElements(a, b, 0);
}



// Required for CodeEval for test cases
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) 
{
    console.log(sortMatrixColumns(line));
});

