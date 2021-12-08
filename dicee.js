
var num1=Math.floor(Math.random()*6)+1;
var randomimg="dice"+num1+".png";
var str="images/" + randomimg;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src", str);
var num2=Math.floor(Math.random()*6)+1;
var str="images/dice"+num2+".png";
document.querySelector(".img2").setAttribute("src",str);
if(num1 > num2)
document.querySelector("h1").textContent="player 1 wins";
else if(num2 > num1)
document.querySelector("h1").textContent="player 2 wins";
else
document.querySelector("h1").textContent="draw";
