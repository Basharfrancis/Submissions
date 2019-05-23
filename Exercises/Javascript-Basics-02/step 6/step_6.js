var x = document.querySelectorAll("img");
for (var i=0 ; i<x.length; i++){
    x[i].addEventListener("mouseover",myfunction)}
    function myfunction(evt){
    var imgName = evt.target.id;
    evt.target.src = 'images/' + imgName + '_2.jpg';    
    }
    for (var j=0; j<x.length; j++){
        x[j].addEventListener("mouseout",myfunction2);
    }
    function myfunction2(evt){
        var imgName = evt.target.id;
        evt.target.src = 'images/' + imgName + '.jpg'; 
    }

