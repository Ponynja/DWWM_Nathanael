var terrain = document.getElementById("terrain");

terrain.style.height = pxToInt(getComputedStyle(terrain).width)/(4/3) +"px";

//Position et taille du terrain
var terrainX = pxToInt(getComputedStyle(terrain).left);
var terrainY = pxToInt(getComputedStyle(terrain).top);
var terrainWidth = pxToInt(getComputedStyle(terrain).width);
var terrainHeight = pxToInt(getComputedStyle(terrain).height);

function testTerrain(obj,x,y){
    objStyle = getComputedStyle(obj);

    //Position obj
    objx = pxToInt(objStyle.left)+x;
    objy = pxToInt(objStyle.top)+y;
    

    //Taille obj
    objwidth = pxToInt(objStyle.width);
    objheight = pxToInt(objStyle.height);

    var interieur = false;

    //Si obj dans les limites du terrain
    if (objx <= terrainWidth - objwidth &&
        objx >= 0 &&
        objy <= terrainHeight - objheight &&
        objy >= 0) {
            interieur = true;
     }
     return interieur;
}