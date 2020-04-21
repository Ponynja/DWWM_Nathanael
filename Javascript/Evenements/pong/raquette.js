
var j1 = document.getElementById("joueur1");
var j2 = document.getElementById("joueur2");

centrerRaquettes();

//Codes clavier des commandes des joueurs (haut bas droite gauche)
var cmdJ1 = [90, 83];
var cmdJ2 = [38, 40];

var vitesse = 10;

//Tableau contenant les touches appuyées
var keyState = Array();


//Passr les touches appuyées à true dans le tableau
document.addEventListener("keydown", function () {
    keyState[event.keyCode || event.which] = true;
})

//Passr les touches lachées à false dans le tableau
document.addEventListener("keyup", function () {
    keyState[event.keyCode || event.which] = false;
})

//Test des touches appuyées et déplacement du joueur
function commmandesClavier(joueur, cmd, vitesse) {
    keyState.forEach(function (value, keyCode) {
        if (value && cmd.includes(keyCode)) {
            deplacerClavier(keyCode, joueur, cmd, vitesse);
        }
    });
}

//Déplacement du joueur en fontion de la touche appuyée
function deplacerClavier(key, joueur, cmd, vitesse) {

    switch (key) {
        case cmd[0]:
            if (deplacementPossible(joueur, 0, -vitesse)) {
                deplacer(joueur, 0, -vitesse)
            }; break;
        case cmd[1]:
            if (deplacementPossible(joueur, 0, vitesse)) {
                deplacer(joueur, 0, vitesse)
            }; break;
        default: break;
    }


}

function deplacementPossible(obj, x, y) {
    possible = true;

    if (collisionObstacle(obj, x, y) || !testTerrain(obj, x, y)) {
        possible = false;
    }

    return possible;
}

function centrerRaquettes() {
    j1.style.left = "50px";
    j1.style.top = terrainHeight / 2 - pxToInt(getComputedStyle(j1).height) / 2 + "px";

    j2.style.left = terrainWidth - 50 - pxToInt(getComputedStyle(j1).width) + "px";
    j2.style.top = terrainHeight / 2 - pxToInt(getComputedStyle(j1).height) / 2 + "px";
}