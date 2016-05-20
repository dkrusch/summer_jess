var selectedColor = "white";
var selectedBox = "box_1";

var selectColor = function(event)
{
    selectedColor = event.srcElement.id;
    console.log(selectedColor)
};


var selectBox = function(event)
{
    selectedBox = event.srcElement.id;
    console.log(selectedBox);
    document.getElementById(selectedBox).style.backgroundColor = selectedColor;
};

window.onload = function() 
{
    var palette = document.getElementById("palette");
    console.log(palette.children)
    for (i = 0; i < palette.children.length; i++)
    {
        palette.children[i].addEventListener("click",
            selectColor);
    }
    var row = document.getElementById("row");
    console.log(row.children)
    for (i = 0; i < row.children.length; i++)
    {
        row.children[i].addEventListener("click",
            selectBox);
    }
};




