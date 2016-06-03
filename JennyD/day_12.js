var sushiNumber = "";
var diceNumber = document.getElementById("dice_number");
var shakeMessage = document.getElementById("shake_message");
var rolledSushi = function(elementId)
{
    var sushiIndex = Math.floor(Math.random() * 6) + 1;
    document.getElementById(elementId).classList = "dice_pic " +
    "image_" + sushiIndex
    return sushiIndex;
}

var rollSushi = function(event)
{
    diceNumber.style.display = "none";
    shakeMessage.style.display = "block";
    shakeMessage.classList = "shake"
    setTimeout(newSushi, 1000);
}

var newSushi = function(event)
{
    var sushiIndexOne = rolledSushi("dice_1");
    var sushiIndexTwo = rolledSushi("dice_2");
    sushiNumber = sushiIndexOne + sushiIndexTwo;
    
    diceNumber.style.display = "block";
    shakeMessage.style.display = "none";
    diceNumber.innerHTML = sushiNumber;
}

window.onload = function()
{
    var button = document.querySelector("button");
    console.log(button);
    button.addEventListener("click", rollSushi);
}