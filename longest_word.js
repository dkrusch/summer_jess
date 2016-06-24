
var longest = function(line) 
{
    if (line) 
    {
        var words = line.split(" ");
        var word = "";
        for (var i = 0; i < words.length; i++)
        {
            if (word.length < words[i].length)
            {
                word = words[i];
            }
        }
        console.log(word);
    }
};

longest("this sentence has some very superduperuper long hhhhhhhhhhhhhhhhhhhhhhhhhhhh");
