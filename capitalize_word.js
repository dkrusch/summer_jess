// Capitalize word

var fs  = require("fs");
var capitalized = function(line) {
    if (line) {
        var words = line.split(" ");
        for (var i = 0; i < words.length; i++)
        {
            var word = words[i];
            if (word && word.length > 0)
            {
                words[i] = word[0].toUpperCase() + word.substring(1, word.length);
            }
        }
        console.log(words.join(" "));
    }
};
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    capitalized(line);
});

// Practice work 
var words = sentence.split(" ");
for (var i = 0; i < words.length; i++)
{
    var word = words[i]
    if (word && word.length > 0)
    words[i] = word[0].toUpperCase() + word.substring(1, word.length)
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


var capitalized = function(line) {
    console.log(line);
    if (line != "") {
        var words = line.split(" ");
        console.log(words)
        for (var i = 0; i < words.length; i++)
        {
            console.log("i = " + i);
            var word = words[i];
            console.log("word: " + word);
            if (word && word.length > 0)
            {
                console.log(words[i])
                words[i] = word[0].toUpperCase() + word.substring(1, word.length);
                console.log(words[i])
            }
        }
        console.log(words.join(" "));
    }
};

var capitalized = function(line) {
    if (line != "") {
        var words = line.split(" ");
        for (var i = 0; i < words.length; i++)
        {
            var word = words[i];
            if (word && word.length > 0)
            {
                words[i] = word[0].toUpperCase() + word.substring(1, word.length);
            }
        }
        console.log(words.join(" "));
    }
};
