jQuery( document ).ready(function()
{
    jQuery(".box").on("click", function()
    {
        var selectedBox = this;
        console.log(selectedBox);
        var animations = ["crawl", "dangle", "jump", "stretch", "flip"];
        var animation = animations[Math.floor(Math.random() * 5)];
        jQuery(selectedBox).addClass(animation);
        setTimeout(function() 
        {
           jQuery(selectedBox).removeClass(animation);
        }, 4000);
    });
});
