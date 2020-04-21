
//Recuperation des elements
var balle = document.getElementById("balle");
balleWidth = pxToInt(getComputedStyle(balle).width);
balleHeight= pxToInt(getComputedStyle(balle).height); 

//Vitesse de déplacement
var vitesseBalle = 5;


// angleBalle = "bd" => bas droite
// angleBalle = "bg" => bas gauche
// angleBalle = "hd" => haut droite
// angleBalle = "hg" => haut gauche
var angleBalle = "bg";


//Transforme un angle (bd bg hd hg) en deplacement x et y
function angleToXY(angle){
    switch(angle){
        case "bd":
            dx = vitesseBalle;
            dy = vitesseBalle;
        break;
        case "hd":
            dx = vitesseBalle;
            dy = -vitesseBalle;
        break;
        case "bg":
            dx = -vitesseBalle;
            dy = vitesseBalle;
        break;
        case "hg":
            dx = -vitesseBalle;
            dy = -vitesseBalle;
        break;
    }
    return [dx,dy];
}

//Change l'angle de la balle en fonction de son angle actuel et de la direction de collision
function changerAngle(angleBalle,collision){
    switch(angleBalle){
        case "bd":
            if(collision=="bas"){
                return "hd";
            }else if(collision=="droite"){
                return "bg";
            }
        break;
        case "hd":
            if(collision=="haut"){
                return "bd";
            }else if(collision=="droite"){
                return "hg";
            }
        break;
        case "bg":
            if(collision=="bas"){
                return "hg";
            }else if(collision=="gauche"){
                return "bd";
            }
        break;
        case "hg":
            if(collision=="haut"){
                return "bg";
            }else if(collision=="gauche"){
                return "hd";
            }
        break;
        default: return angleBalle;
    }

    return angleBalle;
}

//Deplacer la balle
function deplacerBalle(){
    angle = angleToXY(angleBalle)
    dx = angle[0];
    dy = angle[1];
    
    deplacer(balle,dx,dy);
}

function collisionBalle(){

    //Tableau contenant les directions de verification de coliision haut bas droite gauche
    dirs = [
        ["haut",0,-vitesseBalle],
        ["bas",0,vitesseBalle],
        ["droite",vitesseBalle,0],
        ["gauche",-vitesseBalle,0]
    ];

    var collision ="";

    //But coté gauche
    var gauche = document.getElementById("gauche");
    //But coté droit
    var droite = document.getElementById("droite");

    var dir;
    var dx;
    var dy;

    //Pour chaque direction de collision
    for(var i = 0; i < dirs.length;i++){

        dir = dirs[i][0]; //Nom de la direction (ex : 'haut');
        dx = dirs[i][1]; //Déplacement en x
        dy = dirs[i][2]; //Déplacement en y
        
        //Si collision 
        if(collisionObstacle(balle,dx,dy)){

            //Enregistrer direction
            collision = dir;

            //Si collision avec raquette, augmenter la vitesse de la balle
            if((testCollision(balle,j1,dx,dy) || testCollision(balle,j2,dx,dy)) && vitesseBalle < 10){
                vitesseBalle++;
            }

            //Si collision avec mur gauche, joueur 2 marque 1 point
            if(testCollision(balle,gauche,dx,dy)){
                balleAuCentre(2);
                marquerPoint(2);
                centrerRaquettes();
                return;
            //Si collision avec mur droit, joueur 1 marque 1 point
            }else if(testCollision(balle,droite,dx,dy)){
                balleAuCentre(1);
                marquerPoint(1);
                centrerRaquettes();
                return;
            }
    
        }

    }

    if(collision != ""){
        //Jouer son de collision
        jouerSon("rebond");
    }

    //Changer angle pour faire rebondir la balle
    angleBalle = changerAngle(angleBalle,collision);

}

//Mettre la balle au centre et la lancer dans la direction du joueur ayant marqué
function balleAuCentre(joueur){
    setPosition(balle,terrainWidth/2-balleWidth/2, terrainHeight/2-balleHeight/2);
    var angles = [
        ["hg","bg"],
        ["hd","bd"]
    ];

    angleBalle = angles[joueur-1][getRndInteger(0,2)];
    vitesseBalle = 5;

}
