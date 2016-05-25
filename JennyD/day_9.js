var duration = "12";
var levelValue = 0;
var congrat = ["0", "Good job!", "Great job!", "Fantastic Job!", "Marvelous Job!", "Stupendous Job!", "Steve Job!", "Splendiforous Job!", "Odd Job!", "No Job!"];
var num = 0;


var winLevel = function(event)
{
    num = num + 1;
    levelValue = levelValue + 1;
    console.log(levelValue)
    event.srcElement.style.display = "none";
    document.getElementById("message_container").style.display = "block";
    document.getElementById("congratMessage").innerHTML = congrat[num];
    document.getElementById("level_number").innerHTML = levelValue;
    setTimeout(newLevel, 2000);
    
};



var newLevel = function()
{
    var ball = document.getElementById("ball")
    document.getElementById("message_container").style.display = "none";
    duration = duration - 1;
    ball.style.animation = "bounce " + duration + "s " + "infinite";
    ball.style.display = "block";
};



window.onload = function() 
{
    var ball = document.getElementById("ball");
    ball.addEventListener("click", winLevel);
}