var selectedColor = "white";
var selectedBox = "box_1";

var selectColor = function(event)
{
    selectedColor = event.srcElement.id;
};


var selectBox = function(event)
{
    selectedBox = event.srcElement.id;
    document.getElementById(selectedBox).style.backgroundColor = selectedColor;
};

window.onload = function() 
{
    var palette = document.getElementById("palette");
    for (var i = 0; i < palette.children.length; i++)
    {
        palette.children[i].addEventListener("click",
            selectColor);
    }
    var row = document.getElementById("row");
    for (var i = 0; i < row.children.length; i++)
    {
        row.children[i].addEventListener("click",
            selectBox);
    }
};




