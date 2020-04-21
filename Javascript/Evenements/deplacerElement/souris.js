
//Deplacements souris

var souris = false;
carre.addEventListener("mousedown",function(){
    souris = true;
});

terrain.addEventListener("mouseup",function(){
    souris = false;
});

terrain.addEventListener("mousemove", function(){
    if(souris){
        carre.style.left = (event.clientX-terrainX) -(pxToInt(getComputedStyle(carre).width)/2) + "px";
        carre.style.top = (event.clientY-terrainY) -(pxToInt(getComputedStyle(carre).height)/2) + "px";
    }
    
})