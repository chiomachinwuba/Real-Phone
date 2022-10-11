var circle = document.getElementById("circle");
var upBtn = document.getElementById("upBtn");
var downBtn = document.getElementById("downBtn");

var rotateValue = circle.style.transform;

var rotateSum;

upBtn.onclick = function() 
{
    rotateSum = rotateValue + "rotate(-90deg)";
    //Because it will rotate the content in anti-clockwise direction
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;   
}

downBtn.onclick = function() 
{
    rotateSum = rotateValue + "rotate(90deg)";
    //Because it will rotate the content in clockwise direction
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;   
}