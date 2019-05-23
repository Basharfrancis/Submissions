var green = document.querySelector('.green');
var red = document.querySelector('.red');
var blue = document.querySelector('.blue');
var x = document.querySelector('p');
green.addEventListener('click',function(){
  x.style.color ='green';
});
red.addEventListener('click',function(){
  x.style.color ='red';
});
blue.addEventListener('click',function(){
  x.style.color ='blue';
}); 