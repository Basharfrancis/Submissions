var x = document.querySelector("img");
x.addEventListener("mouseover",myfunction);
function myfunction(){
    x.src = "images/image1_2.jpg";
    x.style.border="3px solid red";
}