var x = document.querySelectorAll("img");
for (var i=0 ; i<x.length; i++){
    x[i].addEventListener("mouseover",myfunction)}
    function myfunction(evt){
    var imgName = evt.target.id;
    evt.target.src = 'images/' + imgName + '_2.jpg';    
    }
