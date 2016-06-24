var diceNumber = jQuery("#dice_number");
var shakeMessage = jQuery("#shake_message");

var rollSushi = function(event)
{
    diceNumber.hide();
    shakeMessage.show();
    shakeMessage.addClass("shake")  
    setTimeout(newSushi, 1000);
}

var newSushi = function(event)
{
    var sushiNumber = 0;
    jQuery(".dice_pic").each(function(index, element)
    {
        var sushiIndex = Math.floor(Math.random() * 6) + 1;
        jQuery(element).removeClass().addClass("dice_pic image_" + sushiIndex);
        sushiNumber = sushiNumber + sushiIndex;
    })
    
    shakeMessage.hide();
    diceNumber.html(sushiNumber);
    diceNumber.show();
}

jQuery( document ).ready(function()
{
    jQuery(".button").on("click", rollSushi);
});
