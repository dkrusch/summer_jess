$( document ).ready(function() 
{
    // Hides messages until the Party? button is pressed
    $("li").hide();
    
    $("form").on("submit", function(event)
    {
        // Stops the page from reloading on submit
        event.preventDefault();
        
        // Gets date and time values
        var dateString = $("#date").val();
        var timeString = $("#time").val();
        
        // Converts date and time as well as the current date to milliseconds
        var date = new Date(dateString + " " + timeString);
        var curDate = new Date()
        var mil = date.getTime();
        var curMil = curDate.getTime();
        
        // Prints out the birthday by month and date
        var dateString = date.toString()
        var birthday = dateString.substring(4,10)
        $("#birthdate").html(birthday);
        
        // Calls update times with the birthdate and current date in milliseconds
        updateTimes(mil, curMil)
    })
    
    var updateTimes = function(mil, curMil)
    {
        // Calculates how many of a certain value of time you've been alive
        var secDif = (curMil - mil) / 1000;
        var minDif = secDif / 60;
        var hourDif = minDif / 60;
        var dayDif = hourDif / 24;
        var yearDif = dayDif / 365;
        
        // Calculates how many milliseconds are in a certain value of time
        var tenThousandthDay = 1000 * 60 * 60 * 24 * 10000;
        var twetyThousandthDay = tenThousandthDay * 2;
        var fiveHundredThousandthHour = 1000 * 60 * 60 * 500000;
        var millionthMin = 1000 * 60 * 1000000;
        var tenMillionthMin = millionthMin * 10;
        var fityMillionthMin = millionthMin * 50;
        
        // Converts the millisecond values above into dates made up of day month and date
        var tenthDate = new Date(tenThousandthDay + mil).toUTCString().substring(0,16)
        var twentyDate = new Date(twetyThousandthDay + mil).toUTCString().substring(0,16)
        var fiveHundredHourDate = new Date(fiveHundredThousandthHour + mil).toUTCString().substring(0,16)
        var oneMilMinDate = new Date(millionthMin + mil).toUTCString().substring(0,16)
        var tenMilMinDate = new Date(tenMillionthMin + mil).toUTCString().substring(0,16)
        var fiftyMilMinDate = new Date(fityMillionthMin + mil).toUTCString().substring(0,16)
        console.log(fiftyMilMinDate)
        
        // Prints those dates into html
        $("#yearsAlive").html(Math.floor(yearDif));
        $("#daysAlive").html(Math.floor(dayDif));
        $("#minsAlive").html(Math.floor(minDif));
        $("#tenThousandthDay").html(tenthDate);
        $("#twetyThousandthDay").html(twentyDate);
        $("#fiveHundredThousandthHour").html(fiveHundredHourDate);
        $("#millionthMin").html(oneMilMinDate);
        $("#tenMillionthMin").html(tenMilMinDate);
        $("#fityMillionthMin").html(fiftyMilMinDate);

        // Reveals the lis once everything is calculated and put into html
        $("li").show();
    }
});