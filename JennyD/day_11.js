function zeroTime(i)
    {
        if (i < 10)
        {
            i = "0" + i;
        }
        return i;
    }

window.onload = function() 
{

    function date()
    {
       var now = new Date(); 
       var hour = now.getHours();
       var min = now.getMinutes();
       var sec = now.getSeconds();
       var color = timeColor(hour, min, sec);
       
       console.log(color);
   
    
    hour = zeroTime(hour);
    min = zeroTime(min);
    sec = zeroTime(sec);
    
    
    
        document.getElementById("cur_hour").innerHTML = hour;
        document.getElementById("cur_min").innerHTML = min;
        document.getElementById("cur_sec").innerHTML = sec;
        setTimeout(date, 1000);
        
        
    
    function timeColor(hour, min, sec) {
		var r = Math.round(255 * (hour / 23));
		var g = Math.round(255 * (min / 59));
		var b = Math.round(255 * (sec / 59));
		
		r = zeroColor(r)
		g = zeroColor(g)
		b = zeroColor(b)
		
    }
    
    document.getElementById("cur_color").innerHTML = hour + "," + min + "," + sec;  
    
    
    
    
    document.body.style.backgroundColor = "rgb(" + hour + "," + min + "," + sec + ")";
    
    }
    /*document.getElementById(color_clock).style.backgroundColor = "rgb(" + hour + "," + min + "," + sec ")";*/
    
    
    function zeroColor(i) {
		if (i.length < 2) {
			i = '0' + i;
		}
		return i;
	}

    

   











    date();	
}