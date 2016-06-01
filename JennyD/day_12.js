var sushiNumber = "";
var diceNumber = document.getElementById("dice_number");
var shakeMessage = document.getElementById("shake_message");
var rollSushi = function(event)
{
    diceNumber.style.display = "none";
    shakeMessage.style.display = "block";
    shakeMessage.classList = "shake" 
    diceNumber.innerHTML = sushiNumber;
    setTimeout(newSushi, 1000);
}

var newSushi = function(event)    
{
    sushiNumber = Math.floor((Math.random() * 13) + 1);
    diceNumber.style.display = "block";
    shakeMessage.style.display = "none";
    diceNumber.innerHTML = sushiNumber;
    
}
window.onload = function()
{
    var button = document.querySelector("button");
    console.log(button);
    button.addEventListener("click",rollSushi);
}