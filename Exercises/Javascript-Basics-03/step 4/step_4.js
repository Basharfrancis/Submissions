var x = document.querySelectorAll("input");
console.log(x);
x[0] = document.getElementById("password");
console.log(x[0]);
x[1] = document.getElementById("confirmation");
var y = document.querySelector("button").addEventListener("click",myfuncyion);
function myfuncyion(){
    console.log(x[0], x[1])
    if(x[0].value != x[1].value){
    x[0].style.borderColor ="red";
    x[1].style.borderColor = "red";
    } else{
    console.log("test")
    }
}