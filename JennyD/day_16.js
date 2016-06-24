$( document ).ready(function()
{
    var numSpot = 1;
    var xp = 0, yp = 0;
    var thing = null;
    constructSpots(numSpot)
    
    $(document).on('mousemove', function (e) 
    {
        clearInterval(thing);
	    var	mouseX = e.pageX;
	    var	mouseY = e.pageY;
		console.log(mouseX)
		console.log(mouseY)
		for (var i = 0; i < numSpot; i++)
        {
            console.log("testing")
            thing = moveDiv("#spot_"+ i, randomInt(5,60), mouseX, mouseY);
        }
	});
    
    function randomInt(firstNum, secondNum)
    {
        return Math.random() * (secondNum - firstNum) + firstNum;
    }
    
    function randomColor() 
    {
        return '#' + Math.random().toString(16).slice(2, 8);
    };
    
    function constructSpots(num)
    {
        for (var i = 0; i < num; i++)
        {
            var size = randomInt(4, 70);
            var color = randomColor();
            console.log(color);
            console.log("work")
            
            $('#main').append('<div class="spot" id="spot_' + i +'"></div>');
			$('#spot_'+i).css( {backgroundColor: color, height: size, width: size} );
        }
        
    }
    
    
    

    function moveDiv(spot, speed, mouseX, mouseY) 
    {
        console.log(spot);
		
		var loop = setInterval(function () 
		{
			xp += (mouseX - xp) / speed;
			yp += (mouseY - yp) / speed;
            
			$(spot).css({left:xp, top:yp});
			
			
			if (Math.abs(xp - mouseX) < 2)
			{
			    xp = mouseX;
			    yp = mouseY;
			    clearInterval(loop);
			}
    
		}, 30); 
		return loop;
	};
});