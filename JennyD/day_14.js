var badHabit ="";
var criticisms = ["That's horrible!", "Absolutely disgusting!", "Gross!", "What is wrong with you?!?!?!"];

// asdfasdfsda
var message = function(event)
{
    // 
    event.preventDefault();
    
    // 
    badHabit = document.getElementById("bad_habit").value;
    
    // 
    document.getElementById("message").innerHTML = "You " + badHabit +"?"
    
    // 
    document.getElementById("criticism").innerHTML = criticisms[Math.floor(Math.random() * 4)];
}

// 
window.onload = function()
{
    var button = document.getElementById("submit_btn");
    button.addEventListener("click", message);
}