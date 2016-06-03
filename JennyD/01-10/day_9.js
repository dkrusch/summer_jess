var duration = "12";
var levelValue = 0;
var congrats = ["Alright job!", "Good job!", "Great job!", "Fantastic Job!", "Marvelous Job!", "Stupendous Job!", "Steve Job!", "Splendiforous Job!", "Odd Job!", "No Job!"];
var messageNum = 0;


var winLevel = function(event)
{
    levelValue = levelValue + 1;
    event.srcElement.style.display = "none";
    document.getElementById("message_container").style.display = "block";
    document.getElementById("congrat_message").innerHTML = congrats[messageNum];
    document.getElementById("level_number").innerHTML = levelValue;
    messageNum = messageNum + 1;
    if (messageNum > congrats.length - 1)
    {
        messageNum = 0;
    }
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