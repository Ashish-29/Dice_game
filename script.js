
function refresh(){
let num1=1+Math.round(5*Math.random());
let num2=1+Math.round(5*Math.random());

if(num1>num2) document.querySelector("h1").innerHTML="Player 1 Win!";
else if(num1<num2) document.querySelector("h1").innerHTML="Player 2 Win!";
else document.querySelector("h1").innerHTML="Match Draw!";

if(num1==1){
    document.querySelector("#dice1 .c1").style.visibility="hidden";
    document.querySelector("#dice1 .c2").style.visibility="hidden";
    document.querySelector("#dice1 .c3").style.visibility="hidden";
    document.querySelector("#dice1 .c4").style.visibility="hidden";
    document.querySelector("#dice1 .c5").style.visibility="visible";
    document.querySelector("#dice1 .c6").style.visibility="hidden";
    document.querySelector("#dice1 .c7").style.visibility="hidden";
    document.querySelector("#dice1 .c8").style.visibility="hidden"; 
    document.querySelector("#dice1 .c9").style.visibility="hidden";
}     
else if(num1==2){
    document.querySelector("#dice1 .c1").style.visibility="hidden";
    document.querySelector("#dice1 .c2").style.visibility="hidden";
    document.querySelector("#dice1 .c3").style.visibility="visible";
    document.querySelector("#dice1 .c4").style.visibility="hidden";
    document.querySelector("#dice1 .c5").style.visibility="hidden";
    document.querySelector("#dice1 .c6").style.visibility="hidden";
    document.querySelector("#dice1 .c7").style.visibility="visible";
    document.querySelector("#dice1 .c8").style.visibility="hidden";
    document.querySelector("#dice1 .c9").style.visibility="hidden";
}     
else if(num1==3){
    document.querySelector("#dice1 .c1").style.visibility="hidden";
    document.querySelector("#dice1 .c2").style.visibility="hidden";
    document.querySelector("#dice1 .c3").style.visibility="visible";
    document.querySelector("#dice1 .c4").style.visibility="hidden";
    document.querySelector("#dice1 .c5").style.visibility="visible";
    document.querySelector("#dice1 .c6").style.visibility="hidden";
    document.querySelector("#dice1 .c7").style.visibility="visible";
    document.querySelector("#dice1 .c8").style.visibility="hidden";
    document.querySelector("#dice1 .c9").style.visibility="hidden";
}     
else if(num1==4){
    document.querySelector("#dice1 .c1").style.visibility="visible";
    document.querySelector("#dice1 .c2").style.visibility="hidden";
    document.querySelector("#dice1 .c3").style.visibility="visible";
    document.querySelector("#dice1 .c4").style.visibility="hidden";
    document.querySelector("#dice1 .c5").style.visibility="hidden";
    document.querySelector("#dice1 .c6").style.visibility="hidden";
    document.querySelector("#dice1 .c7").style.visibility="visible";
    document.querySelector("#dice1 .c8").style.visibility="hidden";
    document.querySelector("#dice1 .c9").style.visibility="visible";
}     
if(num1==5){
    document.querySelector("#dice1 .c1").style.visibility="visible";
    document.querySelector("#dice1 .c2").style.visibility="hidden";
    document.querySelector("#dice1 .c3").style.visibility="visible";
    document.querySelector("#dice1 .c4").style.visibility="hidden";
    document.querySelector("#dice1 .c5").style.visibility="visible";
    document.querySelector("#dice1 .c6").style.visibility="hidden";
    document.querySelector("#dice1 .c7").style.visibility="visible";
    document.querySelector("#dice1 .c8").style.visibility="hidden";
    document.querySelector("#dice1 .c9").style.visibility="visible";
}     

if(num2==1){
    document.querySelector("#dice2 .c1").style.visibility="hidden";
    document.querySelector("#dice2 .c2").style.visibility="hidden";
    document.querySelector("#dice2 .c3").style.visibility="hidden";
    document.querySelector("#dice2 .c4").style.visibility="hidden";
    document.querySelector("#dice2 .c5").style.visibility="visible";
    document.querySelector("#dice2 .c6").style.visibility="hidden";
    document.querySelector("#dice2 .c7").style.visibility="hidden";
    document.querySelector("#dice2 .c8").style.visibility="hidden";
    document.querySelector("#dice2 .c9").style.visibility="hidden";
}     
else if(num2==2){
    document.querySelector("#dice2 .c1").style.visibility="hidden";
    document.querySelector("#dice2 .c2").style.visibility="hidden";
    document.querySelector("#dice2 .c3").style.visibility="visible";
    document.querySelector("#dice2 .c4").style.visibility="hidden";
    document.querySelector("#dice2 .c5").style.visibility="hidden";
    document.querySelector("#dice2 .c6").style.visibility="hidden";
    document.querySelector("#dice2 .c7").style.visibility="visible";
    document.querySelector("#dice2 .c8").style.visibility="hidden";
    document.querySelector("#dice2 .c9").style.visibility="hidden";
}     
else if(num2==3){
    document.querySelector("#dice2 .c1").style.visibility="hidden";
    document.querySelector("#dice2 .c2").style.visibility="hidden";
    document.querySelector("#dice2 .c3").style.visibility="visible";
    document.querySelector("#dice2 .c4").style.visibility="hidden";
    document.querySelector("#dice2 .c5").style.visibility="visible";
    document.querySelector("#dice2 .c6").style.visibility="hidden";
    document.querySelector("#dice2 .c7").style.visibility="visible";
    document.querySelector("#dice2 .c8").style.visibility="hidden";
    document.querySelector("#dice2 .c9").style.visibility="hidden";
}     
else if(num2==4){
    document.querySelector("#dice2 .c1").style.visibility="visible";
    document.querySelector("#dice2 .c2").style.visibility="hidden";
    document.querySelector("#dice2 .c3").style.visibility="visible";
    document.querySelector("#dice2 .c4").style.visibility="hidden";
    document.querySelector("#dice2 .c5").style.visibility="hidden";
    document.querySelector("#dice2 .c6").style.visibility="hidden";
    document.querySelector("#dice2 .c7").style.visibility="visible";
    document.querySelector("#dice2 .c8").style.visibility="hidden";
    document.querySelector("#dice2 .c9").style.visibility="visible";
}     
if(num2==5){
    document.querySelector("#dice2 .c1").style.visibility="visible";
    document.querySelector("#dice2 .c2").style.visibility="hidden";
    document.querySelector("#dice2 .c3").style.visibility="visible";
    document.querySelector("#dice2 .c4").style.visibility="hidden";
    document.querySelector("#dice2 .c5").style.visibility="visible";
    document.querySelector("#dice2 .c6").style.visibility="hidden";
    document.querySelector("#dice2 .c7").style.visibility="visible";
    document.querySelector("#dice2 .c8").style.visibility="hidden";
    document.querySelector("#dice2 .c9").style.visibility="visible";
} 
}    