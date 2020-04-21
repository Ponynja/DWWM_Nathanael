//Recuperation des obstacles
var obstacles = document.querySelectorAll(".obstacle");


//Positionnement aléatoire des obstacles
obstacles.forEach(function(obstacle){
    
    id = obstacle.id;

    switch(id){
        case "haut":    
            obstacle.style.left = "0px";
            obstacle.style.top = "0px";
            obstacle.style.width = terrainWidth+"px";
            obstacle.style.height = "10px";
        break;
        case "bas":    
            obstacle.style.left = "0px";
            obstacle.style.top = (terrainHeight - 10) +"px";
            obstacle.style.width = terrainWidth+"px";
            obstacle.style.height = "10px";
        break;
        case "droite":    
            obstacle.style.left = (terrainWidth - 10) +"px";
            obstacle.style.top = "0px";
            obstacle.style.width = "10px";
            obstacle.style.height = terrainHeight+"px";
        break;
        case "gauche":    
            obstacle.style.left = "0px";
            obstacle.style.top = "0px";
            obstacle.style.width = "10px";
            obstacle.style.height = terrainHeight+"px";
        break;
    }

})
   
//test collision entre 2 rectangles
function testCollision(obj, obstacle,x,y){

    if(obj.id == obstacle.id){
        return false;
    }

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

function collisionObstacle(carre,dx,dy){
    collision = false;
    obstacles = document.querySelectorAll(".obstacle");
    
    obstacles.forEach(function(obstacle){
        if(testCollision(carre,obstacle,dx,dy)){
            collision = true;
        }
    })

    return collision;
}
