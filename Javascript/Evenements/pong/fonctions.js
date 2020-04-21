
//Generateur d'entier aleatoire
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

  //Retourne la valeur entiere d'une dimension en px (100px => 100)
function pxToInt(px){
    return parseInt(px.replace("px",""));
}


//Fonction de déplacement
function deplacer(obj,dx,dy){
    objStyle = getComputedStyle(obj);
    setPosition(obj,pxToInt(objStyle.left)+dx,pxToInt(objStyle.top)+dy);
}


//Change la postion d'un objet
function setPosition(obj,x,y){
    obj.style.left = x + ("px");
    obj.style.top = y + ("px");
}