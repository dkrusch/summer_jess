var sushiArray = ["shake", "hop", "spin", "hooray"];

var animation = function(event)
{
    var sushiValue = Math.floor((Math.random() * 4) + 0);
    event.srcElement.className = "sushi_box " + sushiArray[sushiValue];
    console.log(sushiValue);
    console.log(event.srcElement);
    console.log(sushiArray[sushiValue]);
    //setTimeout(newLevel, 2000);
    
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
