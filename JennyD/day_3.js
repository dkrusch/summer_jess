    
function changeColor(a,b,c) 
{
    a = Math.floor((Math.random() * 255) + 0);
    b = Math.floor((Math.random() * 255) + 0);
    c = Math.floor((Math.random() * 255) + 0);
    console.log(a)
    
    document.body.style.backgroundColor = "rgb(" + a + "," + b + "," + c + ")";
}
