var sushiArray = ["", "shake", "hop", "spin", "hooray"];
var sushiValue = "";

var animation = function(event)
{
    sushiValue = Math.floor((Math.random() * 4) + 1);
    console.log(sushiValue);
    console.log(event.srcElement);
    document.getElementsByClassName("sushi_box").innerHTML = "sushi_box "+ sushiArray[sushiValue];
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
