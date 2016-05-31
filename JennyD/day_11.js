window.onload = function() {

    function timeColor(value, maxValue) {
        var result = Math.round(255 * (value / maxValue));
        return zeroPad(result.toString(16), 2);
    }

    function zeroPad(input, resultLength) {
        var result = "";
        for (var i = 0; i < resultLength - input.length; i++) {
            result += "0";
        }
        return result + input;
    }

    function date() {
        var now = new Date();
        var hour = now.getHours();
        var min = now.getMinutes();
        var sec = now.getSeconds();
        var red = timeColor(hour, 24);
        var green = timeColor(min, 60);
        var blue = timeColor(sec, 60);
        var hexColor = red + green + blue;

        hour = zeroPad(hour.toString(), 2);
        min = zeroPad(min.toString(), 2);
        sec = zeroPad(sec.toString(), 2);

        document.getElementById("cur_hour").innerHTML = hour;
        document.getElementById("cur_min").innerHTML = min;
        document.getElementById("cur_sec").innerHTML = sec;

        document.getElementById("cur_color").innerHTML = hexColor;

        document.body.style.backgroundColor = "#" + hexColor;

        setTimeout(date, 1000);

    }

    date();
}