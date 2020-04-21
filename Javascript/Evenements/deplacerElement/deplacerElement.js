//Retourne la valeur entiere d'une dimension en px (100px => 100)
function pxToInt(px){
    return parseInt(px.replace("px",""));
}

//Recuperation des elements
var carre = document.getElementById("carre");


//Vitesse de déplacement
var vitesse = 10;

//Fonction de déplacement
function deplacer(obj,x,y){
    objStyle = getComputedStyle(obj);
    obj.style.left = (pxToInt(objStyle.left)+x)+"px";
    obj.style.top = (pxToInt(objStyle.top)+y)+"px";
}



function deplacementPossible(obj, x, y){
    possible = true;

    if(collisionObstacle(obj,x,y) || !testTerrain(obj,x,y)){
        possible = false;
    }

    return possible;
}

