    
function changeColor(a,b,c) 
{
    a = Math.floor((Math.random() * 255) + 0);
    b = Math.floor((Math.random() * 255) + 0);
    c = Math.floor((Math.random() * 255) + 0);
    console.log(a)
    
    // links to the html body tag, changes the style using a string of "rgb( , , )" plus values"
    document.body.style.backgroundColor = "rgb(" + a + "," + b + "," + c + ")";
}
