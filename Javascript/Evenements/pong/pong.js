//Balle au centre
balleAuCentre(1);

//Boucle de jeu
function jeu(){

    deplacerBalle(angleBalle); //Deplacer la balle
    collisionBalle(); //Tester la collision de la balle
    commmandesClavier(j1,cmdJ1,10); //Gérer les mouvement du joueur 1
    commmandesClavier(j2,cmdJ2,10); //Gérer les mouvement du joueur 2

    //Verifier la victoire
    var victoire = verifVictoire(10);

    //Si victoire afficher message et sortir de la boucle sinon timeout pour continuer
    if(!victoire){
        setTimeout(jeu,17);
    }else{
        afficherVictoire(victoire);
    }

}

//Lancement du jeu
var menu = document.getElementById("menu");
menu.style.height = pxToInt(getComputedStyle(menu).width)/(4/3) +"px";

var start = document.getElementById("start");
start.addEventListener("click",demarrerJeu)

function demarrerJeu(){
    menu.classList.add("hidden");
    setTimeout(jeu,1000);
    start.removeEventListener("click",demarrerJeu);
}



