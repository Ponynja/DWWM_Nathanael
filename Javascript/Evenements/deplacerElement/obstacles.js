var obstacles = document.getElementsByClassName("obstacle");

//Generateur d'entier aleatoire
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

//Positionnement aléatoire des obstacles
for(let i =0; i < obstacles.length;i++){
    obstacles[i].style.left = getRndInteger(0,terrainWidth - 50)+"px";
    obstacles[i].style.top = getRndInteger(0,terrainHeight  - 50)+"px";
}



//test collision entre 2 rectangles
function testCollision(obj, obstacle,x,y){

    objStyle = getComputedStyle(obj);
    obstacleStyle = getComputedStyle(obstacle);

    //Positions
    objx = pxToInt(objStyle.left)+x;
    objy = pxToInt(objStyle.top)+y;
    obstaclex = pxToInt(obstacleStyle.left);
    obstacley = pxToInt(obstacleStyle.top);

    //Tailles
    objwidth = pxToInt(objStyle.width);
    objheight = pxToInt(objStyle.height);
    obstaclewidth = pxToInt(obstacleStyle.width);
    obstacleheight = pxToInt(obstacleStyle.height);

    var collision = false;

    //Si intersection entre les 2 objets
    if (objx < obstaclex + obstaclewidth &&
        objx + objwidth > obstaclex &&
        objy < obstacley + obstacleheight &&
        objheight + objy > obstacley) {
            collision = true;
     }

    return collision;
}

function collisionObstacle(carre,x,y){
    collision = false;
    obstacles = document.getElementsByClassName("obstacle");
    i=0;
    while(i<obstacles.length && collision == false){
        if(testCollision(carre,obstacles[i],x,y)){
            collision = true;
        }
        i++;
    }

    return collision;
}
