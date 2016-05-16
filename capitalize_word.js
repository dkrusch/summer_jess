// Capitalize word

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        var words = line.split(" ");
        for (var i = 0; i < words.length; i++);
        {
            var word = words[i];
            if (word && word.length > 0)
            {
                words[i] = word[0].toUpperCase() + word.substring(1, word.length);
            }
        }
        console.log(words.join(" "));
    }
});


var words = sentence.split(" ");
for (var i = 0; i < words.length; i++)
{
    var word = words[i]
    words[i] = word[0].toUpperCase() + word.substring(1, word.length)
    console.log(words[i])
}

console.log(words.join(" "))

var output = word[0].toUpperCase();
for (var i = 1; i < word.length; i++)
{
       output = output + word[i];
}

// Capitalize every letter

var word = "cat".split("");
var output = "";
for (var x = 0; x < word.length; x++)
{
      output = output + word[x].toUpperCase();
}

