document.querySelector("button").addEventListener("click",rollDice)
function rollDice(){
let randomNumber1 = Math.random();
randomNumber1 = randomNumber1*6;
randomNumber1 = Math.floor(randomNumber1)+1;
let randomSource = "images/dice"+randomNumber1+".png";
console.log(randomSource)
document.querySelectorAll("img")[0].setAttribute("src",randomSource);

let randomNumber2 = Math.floor(Math.random()*6)+1;
let randomSource2 = "images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomSource2);

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="Player 1 Winss ";
}
else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML="Player 2 Winss";
}
else{
  document.querySelector("h1").innerHTML="Its a tie";
}
}