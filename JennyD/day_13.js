var userSelection = "";
var shapes = ["rock", "paper", "scissors"]
var computerShape = "";
var winMessage = "";

var fistShake = function(event)
{
    computerShape = shapes[Math.floor(Math.random() * 3)]
    document.getElementById("player").classList = "display right_fist shake";
    document.getElementById("computer").classList = "display left_fist shake";
    userSelection = event.srcElement.id;
    var displays = document.getElementsByClassName("display");
    for (var i = 0; i < displays.length; i++)
    {
        displays[i].classList += " shake";
    }
    setTimeout(selection, 1500);
}

var selection = function(event)
    {
        document.getElementById("player").classList = "display " + userSelection;
        document.getElementById("computer").classList = "display " + computerShape;

        // Decides who wins based on the images displayed
        var compare = function(userSelection, computerShape)
            {
                if (userSelection === computerShape)
                {
                    return "The result is a tie!";
                }
                
                var playerWins = false;
                if (userSelection === "rock" && computerShape === "scissors")
                {
                        playerWins = true;
                }
                else if (userSelection === "paper" && computerShape === "rock")
                {
                        playerWins = true;
                }
                else if (userSelection === "scissors" && computerShape === "paper")
                {
                        playerWins = true;
                }
                
                var winnerName = "Computer";
                if (playerWins)
                {
                    winnerName = "Player";
                }
                
                return winnerName + " wins!"
            }
            document.getElementById("win").innerHTML = compare(userSelection, computerShape)
        }

        window.onload = function()
        {
            var buttons = document.getElementsByClassName("button");
            for (var i = 0; i < buttons.length; i++)
            {
                buttons[i].addEventListener("click",
                    fistShake);
            }
        }