var x = document.createElement('div');
document.body.appendChild(x);
x.setAttribute('class','fortiy');
var x = document.querySelector('div');
var z = document.querySelector('input');
z.addEventListener("keyup",hasha);
function hasha(){
    x.innerHTML=z.value;
}