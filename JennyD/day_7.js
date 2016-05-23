// In this application, when the mouse enters a box the boxes color will change

var selectedBox = "box_1";

// Creates a random color for the box
function randomColor(event) 
{
    return '#' + Math.random().toString(16).slice(2, 8);
};

// When the mouse enters this function defines the box's id and changes applies a random color
var selectBox = function(event)
{
    selectedBox = event.srcElement.id;
	document.getElementById(selectedBox).style.backgroundColor = randomColor();
};

// When the window loads completely this function creates event listeners for the id's
window.onload = function() 
{
    var main = document.getElementById("main");
    console.log(main.children)
    for (i = 0; i < main.children.length; i++)
    {
        main.children[i].addEventListener("mouseenter",
            selectBox, randomColor);
    }
};