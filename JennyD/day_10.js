var sushiArray = ["shake", "hop", "spin", "hooray", "grow"];

var animation = function(event)
{
    var sushiValue = Math.floor(Math.random() * sushiArray.length);
    event.srcElement.className = "sushi_box " + sushiArray[sushiValue];
};

window.onload = function() 
{
    var sushi = document.getElementsByClassName("sushi_box");
    for (var i = 0; i < sushi.length; i++)
    {
        sushi[i].addEventListener("click",
            animation);
    }
}
